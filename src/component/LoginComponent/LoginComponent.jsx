import { useState } from 'react';
import css from './LoginComponent.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/thunc';
function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isEnabled = () => {
    if (email === '' || password === '') {
      return true;
    }
  };
  const hendleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(logIn(user));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.UserForm} onSubmit={onSubmit}>
      <input
        value={email}
        onChange={hendleChange}
        className={css.userInput}
        type="email"
        name="email"
        placeholder="Your email"
      />
      <input
        value={password}
        onChange={hendleChange}
        className={css.userInput}
        type="password"
        name="password"
        placeholder="Your password"
      />
      <button className={css.btnSignup} disabled={isEnabled()}>
        log in
      </button>
    </form>
  );
}

export default LoginComponent;
