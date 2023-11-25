import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yap from 'yup';
import { logIn } from 'redux/thunc';
import { selectIsLoading } from 'redux/selectors';

function LoginComponent() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
        password: Yap.string()
          .min(8, 'must be more characters then 7')
          .required(),
      })}
      onSubmit={values => {
        dispatch(logIn(values));
      }}
    >
      {formik => (
        <Center
          textAlign="center"
          display="flex"
          justifyContent="center"
          my="20px"
        >
          <Form>
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
        </Center>
      )}
    </Formik>
  );
}

export default LoginComponent;
