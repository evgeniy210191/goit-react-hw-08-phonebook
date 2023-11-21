import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/selectors';

function PublicRoute({ children }) {
  const isLogIn = useSelector(isLoggedIn);
  return <>{!isLogIn ? children : <Navigate to="/contacts" />}</>;
}

export default PublicRoute;
