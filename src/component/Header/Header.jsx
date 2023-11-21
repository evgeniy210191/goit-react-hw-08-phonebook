import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import UserMenu from 'component/UserMenu/UserMenu';
import AccessNav from 'component/AccessNav/AccessNav';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/selectors';
function isActive({ isActive }) {
  return isActive ? `${css.headerLink} ${css.active}` : `${css.headerLink}`;
}
function Header() {
  const loggedIn = useSelector(isLoggedIn);
  return (
    <header>
      <p className={css.logo}>
        <NavLink className={isActive} to="/">
          Home
        </NavLink>
        {loggedIn && (
          <NavLink className={isActive} to="/contacts">
            Phonebook
          </NavLink>
        )}
      </p>
      <div className={css.container}>
        {loggedIn ? <UserMenu /> : <AccessNav />}
      </div>
    </header>
  );
}

export default Header;
