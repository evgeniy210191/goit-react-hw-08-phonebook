import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/thunc';
import { selectUserName } from 'redux/selectors';
function UserMenu(props) {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const userLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <p className={css.userail}>{userName}</p>
      <button type="button" className={css.btnLogout} onClick={userLogOut}>
        Logout
      </button>
    </>
  );
}

export default UserMenu;
