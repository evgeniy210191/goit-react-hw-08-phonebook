import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/thunc';
import { selectUserName } from 'redux/selectors';
import { Box, Button } from '@chakra-ui/react';
function UserMenu(props) {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const userLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Box>{userName}</Box>
      <Button
        colorScheme="yellow"
        bgColor="yellow.100"
        type="button"
        py="5px"
        px="15px"
        h="auto"
        lineHeight="24px"
        onClick={userLogOut}
      >
        Logout
      </Button>
    </>
  );
}

export default UserMenu;
