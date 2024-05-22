"use client";

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { headerItems } from "./header-items";
import { redirect } from "next/navigation";

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(sessionStorage.getItem("logged"))
  );
  const theme = useTheme();

  const onLogOut = () => {
    sessionStorage.removeItem("logged");
    setLoggedIn(false);
    window.location.reload();
  };

  return (
    <Box bgcolor={theme.palette.primary.main} color="white" p={2}>
      <Stack direction="row" gap={2}>
        <Stack direction="row" alignItems="flex-end" gap={1}>
          <Image width={36} height={36} alt="logo" src="/assets/yarn.png" />
          <Typography variant="h5">FakeShop</Typography>
        </Stack>
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          justifyContent="center"
          flex={1}
          px={2}
        >
          {headerItems.map((item, index) => {
            return (
              <Fragment key={item.href}>
                <Link key={item.href} href={item.href}>
                  {item.title}
                </Link>
                {index !== headerItems.length - 1 && "|"}
              </Fragment>
            );
          })}
        </Stack>
        <Stack direction="row" gap={2} alignItems="center">
          {loggedIn && (
            <Button onClick={onLogOut} variant="text" sx={{ color: "white" }}>
              Log out
            </Button>
          )}
          {!loggedIn && (
            <>
              <Link href="login">Log in</Link>
              <Link href="register">Register</Link>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
