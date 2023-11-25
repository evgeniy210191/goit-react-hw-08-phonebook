import React from 'react';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

function AccessNav() {
  return (
    <>
      <ChakraLink
        to="/register"
        as={ReactRouterLink}
        _activeLink={{ bgColor: 'yellow.100' }}
        borderRadius="7px"
        py="5px"
        px="15px"
        fontWeight="600"
      >
        Sign up
      </ChakraLink>
      <ChakraLink
        to="/login"
        as={ReactRouterLink}
        _activeLink={{ bgColor: 'yellow.100' }}
        borderRadius="7px"
        py="5px"
        px="15px"
        fontWeight="600"
      >
        Log in
      </ChakraLink>
    </>
  );
}

export default AccessNav;
