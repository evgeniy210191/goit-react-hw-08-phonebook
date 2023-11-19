import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from 'component/Header/Header';

function Layout(props) {
  return (
    <div className={css.wrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
