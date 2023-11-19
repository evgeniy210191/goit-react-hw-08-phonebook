import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Layout from 'component/Layout/Layout';
import { useEffect } from 'react';
import { update } from 'redux/thunc';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(update());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
