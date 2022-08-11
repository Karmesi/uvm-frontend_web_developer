import React, { useState, useContext } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import {
  Button,
  Sheet,
  TextField,
  Typography,
} from '@mui/joy';
import { UserContext } from '../userDetails';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [missing, setMissing] = useState({
    name: false,
    password: false,
  });
  const { setUserName } = useContext(UserContext);

  const handleSetName = () => {
    if (password === '') {
      setMissing({ password: true });
    }
    if (name === '') {
      setMissing({ name: true });
    }
    if (password !== '' && name !== '') {
      localStorage.setItem('userName', name);
      setUserName(name);
    }
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 400,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue</Typography>
          <TextField
            required
            error={missing.name}
            value={name}
            name="userName"
            type="text"
            placeholder="JohnDoe"
            label="User"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            error={missing.password}
            value={password}
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            sx={{
              textAlign: 'center',
              mt: 1,
            }}
            onClick={handleSetName}
          >
            Log in
          </Button>
        </div>
      </Sheet>
    </CssVarsProvider>
  );
}
