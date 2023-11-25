import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@chakra-ui/react';
function ContactComponent({ id, name, number, deleteContact }) {
  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="2"
    >
      <Box>
        ❄ {name}: {number}
      </Box>
      <Button
        colorScheme="yellow"
        bgColor="yellow.100"
        onClick={() => deleteContact(id)}
        type="button"
        py="5px"
        px="15px"
        h="auto"
      >
        delete
      </Button>
    </ListItem>
  );
}

export default ContactComponent;

ContactComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
