import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'redux/thunc';
import * as Yap from 'yup';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  ScaleFade,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { selectIsLoading, selectIsSignup } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const isSignup = useSelector(selectIsSignup);
  const [show, setShow] = React.useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = () => setShow(!show);
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      validationSchema={Yap.object({
        name: Yap.string().min(4, 'must be more characters then 3').required(),
        password: Yap.string()
          .min(8, 'must be more characters then 7')
          .required(),
      })}
      onSubmit={(values, actions) => {
        dispatch(signUp(values));
        onToggle();
        setTimeout(() => navigate('/login'), 2000);
        actions.resetForm();
      }}
    >
      {formik => (
        <Center
          display="flex"
          flexDirection="column"
          alignItems="center"
          my="20px"
          textAlign="center"
          gap="20px"
        >
          <Form>
            <InputGroup>
              <Input
                mb="10px"
                value={formik.values.name}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                isInvalid={formik.errors.name}
                errorBorderColor="red.500"
                type="text"
                name="name"
                placeholder="your name"
              />
              {!formik.errors.name && formik.touched.name ? (
                <InputRightElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="✔"
                />
              ) : null}
            </InputGroup>
            <InputGroup>
              <Input
                mb="10px"
                value={formik.values.email}
                isInvalid={formik.errors.email}
                onFocus={formik.handleBlur}
                onChange={formik.handleChange}
                errorBorderColor="red.500"
                type="email"
                name="email"
                placeholder="Your email"
              />
              {!formik.errors.email && formik.touched.email ? (
                <InputRightElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="✔"
                />
              ) : null}
            </InputGroup>
            <InputGroup size="md">
              <Input
                mb="10px"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                errorBorderColor="red.500"
                isInvalid={formik.errors.password}
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              isLoading={isLoading}
              type="submit"
              spinner={<Spinner size="md" color="white" />}
              colorScheme="yellow"
              bgColor="yellow.100"
              py="5px"
              px="15px"
              h="auto"
              lineHeight="24px"
            >
              sig up
            </Button>
          </Form>
          {isSignup && (
            <ScaleFade initialScale={0.9} in={isOpen}>
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                width="500px"
                borderRadius="7px"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  You sig up!
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  Thanks. Go to the "log in" to authorize
                </AlertDescription>
              </Alert>
            </ScaleFade>
          )}
        </Center>
      )}
    </Formik>
  );
}

export default SignUp;
