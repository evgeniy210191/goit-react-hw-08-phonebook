import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/thunc';
function UserMenu(props) {
  const dispatch = useDispatch();
  const userLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <p className={css.userail}>mango@mail.com</p>
      <button type="button" className={css.btnLogout} onClick={userLogOut}>
        Logout
      </button>
    </>
  );
}

export default UserMenu;
