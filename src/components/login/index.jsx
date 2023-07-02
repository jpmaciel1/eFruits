import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, CircularProgress } from '@mui/material';
import { login } from '../../store';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
      </Button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
