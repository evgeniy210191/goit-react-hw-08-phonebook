import { NavLink as ReactRouterLink } from 'react-router-dom';
import UserMenu from 'component/UserMenu/UserMenu';
import AccessNav from 'component/AccessNav/AccessNav';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/selectors';
import { Box, Link as ChakraLink } from '@chakra-ui/react';

function Header() {
  const accessToken = useSelector(selectAccessToken);

  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        ml="20px"
      >
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          _activeLink={{ bgColor: 'yellow.100' }}
          borderRadius="7px"
          py="5px"
          px="15px"
          fontWeight="600"
        >
          Home
        </ChakraLink>
        {accessToken && (
          <ChakraLink
            as={ReactRouterLink}
            to="/contacts"
            _activeLink={{ bgColor: 'yellow.100' }}
            borderRadius="7px"
            py="5px"
            px="15px"
            fontWeight="600"
          >
            Phonebook
          </ChakraLink>
        )}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        mr="20px"
      >
        {accessToken ? <UserMenu /> : <AccessNav />}
      </Box>
    </Box>
  );
}

export default Header;
