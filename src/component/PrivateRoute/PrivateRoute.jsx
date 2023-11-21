import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/selectors';

function PrivateRoute({ children }) {
  const isLogIn = useSelector(isLoggedIn);
  return <>{isLogIn ? children : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
