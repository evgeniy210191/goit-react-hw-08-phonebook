import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAllowEnter } from 'redux/selectors';

function PublicRouteSignUp({ children }) {
  const isAllowEnter = useSelector(selectAllowEnter);
  return <>{!isAllowEnter ? children : <Navigate to="/login" />}</>;
}

export default PublicRouteSignUp;
