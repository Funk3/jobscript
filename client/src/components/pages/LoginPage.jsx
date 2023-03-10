import { useState, useContext } from 'react';
import { authContext } from 'providers/AuthProvider';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(authContext);

  const onSubmit = function (event) {
    event.preventDefault();
    email && login(email, password);
  };

  return (
    <div className='login'>
      <form className='loginform' onSubmit={onSubmit}>
      <h2>Login</h2>
        <p>
          <input
            type='text'
            name='username'
            value={email}
            placeholder='Enter Email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </p>
        <p>
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </p>
        <p className='submit'>
          <button className='login-button' type='submit' name='commit'>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
