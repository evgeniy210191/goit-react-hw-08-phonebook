import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Layout from 'component/Layout/Layout';
import { useEffect } from 'react';
import { getContact, update } from 'redux/thunc';
import PrivateRoute from 'component/PrivateRoute/PrivateRoute';
import PublicRoute from 'component/PablicRoute/PublicRoute';
import { isLoggedIn, selectisRerendung } from 'redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isRerendung = useSelector(selectisRerendung);
  const isLogIn = useSelector(isLoggedIn);
  useEffect(() => {
    dispatch(update());
  }, [dispatch]);
  return (
    !isRerendung && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    )
  );
}

export default App;
