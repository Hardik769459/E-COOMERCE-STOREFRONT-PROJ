import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication (change logic as needed)
    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', username);
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username: <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
          Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;