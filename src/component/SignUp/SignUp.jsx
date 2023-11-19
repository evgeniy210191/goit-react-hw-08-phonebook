import { useState } from 'react';
import css from './SignUp.module.css';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/thunc';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isEnabled = () => {
    if (name === '' || email === '' || password === '') {
      return true;
    }
  };
  const hendleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
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
      name,
      email,
      password,
    };
    dispatch(signUp(user));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form className={css.UserForm} onSubmit={onSubmit}>
      <input
        value={name}
        onChange={hendleChange}
        className={css.userInput}
        type="text"
        name="name"
        placeholder="your name"
      />
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
        sig up
      </button>
    </form>
  );
}

export default SignUp;
