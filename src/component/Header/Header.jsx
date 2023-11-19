import { Link } from 'react-router-dom';
import css from './Header.module.css';
import UserMenu from 'component/UserMenu/UserMenu';
import AccessNav from 'component/AccessNav/AccessNav';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/selectors';

function Header() {
  const loggedIn = useSelector(isLoggedIn);
  return (
    <header>
      <p className={css.logo}>
        <Link to="/contacts">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3447/3447682.png"
            alt="noteBook"
            width={'40px'}
          />
        </Link>
      </p>
      <div className={css.container}>
        {loggedIn ? <UserMenu /> : <AccessNav />}
      </div>
    </header>
  );
}

export default Header;
