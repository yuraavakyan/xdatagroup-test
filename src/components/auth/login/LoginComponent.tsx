"use client";

import { Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

type Credentials = {
  username: string;
  password: string;
};

export const LoginComponent = () => {
  const theme = useTheme();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>();

  const onLogin = () => {
    const correctUsername = sessionStorage.getItem("username");
    const correctPassword = sessionStorage.getItem("password");

    if (username === correctUsername && password === correctPassword) {
      sessionStorage.setItem("logged", "true");
      window.location.href = "/";
    } else {
      setLoginError("Incorrect username or password");
    }
  };

  return (
    <Stack height="100%" justifyContent="center" alignItems="center">
      <Stack
        boxShadow={3}
        borderRadius={4}
        border="1px solid"
        borderColor={
          loginError ? theme.palette.error.main : theme.palette.divider
        }
        p={2}
        gap={1}
        minWidth="400px"
      >
        <Typography variant="h5">Login</Typography>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username/email"
          size="small"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          size="small"
        />
        <Button onClick={onLogin} variant="contained">
          Log in
        </Button>
        <Typography color="error">{loginError}</Typography>
      </Stack>
      <Stack direction="row" gap={2} alignItems="center" pt={2}>
        <Typography>Do not have an account yet? </Typography>
        <Link href="/register">
          <Typography color="primary">Register</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};
