import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/thunc';
import { Form, Formik } from 'formik';
import * as Yap from 'yup';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { selectContacts } from 'redux/selectors';
function ContactForm() {
  const [errorPass, seterrorPass] = useState(false);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (!/^[A-Z0-9._%+-]+\s+[A-Z0-9._%+-]/i.test(values.name)) {
          errors.name = 'no timplate';
        }
        return errors;
      }}
      validationSchema={Yap.object({
        number: Yap.string()
          .min(11, 'must be more characters then 10')
          .required(),
      })}
      onSubmit={(values, actions) => {
        if (
          contacts.find(namePhonsbooks => namePhonsbooks.name === values.name)
        ) {
          seterrorPass(true);
          setTimeout(() => seterrorPass(false), 1000);
          return;
        }

        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      {formik => (
        <Center>
          <Box display="flex" justifyContent="center" my="20px">
            <Form>
              <Center>
                <Heading as="h1" size="lg" noOfLines={1} mb={3}>
                  Phonebook
                </Heading>
              </Center>
              <Input
                mb="10px"
                value={formik.values.name}
                onChange={formik.handleChange}
                isInvalid={formik.errors.name}
                errorBorderColor="red.500"
                type="text"
                name="name"
                placeholder="your first name and second name"
              />
              <Input
                mb="10px"
                value={formik.values.number}
                isInvalid={formik.errors.number}
                onChange={formik.handleChange}
                errorBorderColor="red.500"
                type="tel"
                name="number"
                placeholder="Your phons number of 11 characters"
              />
              <Center>
                <Button type="submit" colorScheme="yellow" bgColor="yellow.100">
                  add contact
                </Button>
              </Center>
              {errorPass && (
                <Stack spacing={3} pos="fixed" top="50px" right="10px">
                  <Alert status="error" borderRadius="7px">
                    <AlertIcon />
                    Sory, your phonebook have same name yet
                  </Alert>
                </Stack>
              )}
            </Form>
          </Box>
        </Center>
      )}
    </Formik>
  );
}

export default ContactForm;
