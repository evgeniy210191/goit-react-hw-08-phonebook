import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAccessToken } from 'redux/selectors';

function PublicRoute({ children }) {
  const accessToken = useSelector(selectAccessToken);
  return <>{!accessToken ? children : <Navigate to="/contacts" />}</>;
}

export default PublicRoute;
