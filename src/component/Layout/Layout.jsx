import { Outlet } from 'react-router-dom';
import Header from 'component/Header/Header';
import { Box } from '@chakra-ui/react';

function Layout(props) {
  return (
    <Box minH="100vh" bgColor="cyan.400">
      <Header />
      <Outlet />
    </Box>
  );
}

export default Layout;
