import { useDispatch, useSelector } from 'react-redux';
import { filtered } from 'redux/createSliceContacts';
import { selectFilter } from 'redux/selectors';
import { Center, FormLabel, Heading, Input } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Formik>
      {formik => (
        <Center display="flex" justifyContent="center" my="5" w="100">
          <Form w="100%">
            <Center>
              <Heading as="h2" size="md" noOfLines={1} mb={3}>
                Contacts
              </Heading>
            </Center>
            <FormLabel textAlign="center">Find contacts by name</FormLabel>
            <Input
              mb="2.5"
              value={filter}
              onChange={event => dispatch(filtered(event.target.value))}
              type="text"
              name="filter"
              placeholder="search by name"
            />
          </Form>
        </Center>
      )}
    </Formik>
  );
}

export default Filter;
