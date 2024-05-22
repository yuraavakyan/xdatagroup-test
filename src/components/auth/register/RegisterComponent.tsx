"use client";

import { Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export const RegisterComponent = () => {
  const theme = useTheme();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const [loginError, setLoginError] = useState<string>();

  const onRegister = () => {
    const correctUsername = sessionStorage.getItem("username");

    if (username !== correctUsername) {
      if (password === repeatPassword) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("logged", "true");
        window.location.href = "/";
      } else {
        setLoginError("Passwords do not match");
      }
    } else {
      setLoginError("User already exists");
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
        <Typography variant="h5">Register</Typography>
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
        <TextField
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          label="Repeat Password"
          type="password"
          size="small"
        />
        <Button onClick={onRegister} variant="contained">
          Register
        </Button>
        <Typography color="error">{loginError}</Typography>
      </Stack>
      <Stack direction="row" gap={2} alignItems="center" pt={2}>
        <Typography>Already have an account? </Typography>
        <Link href="/login">
          <Typography color="primary">Sign in</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};
