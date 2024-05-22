import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export const HomeComponent = () => {
  return (
    <Stack
      height={1}
      justifyContent="center"
      alignItems="center"
      direction="row"
      gap={2}
    >
      <Stack maxWidth="600px" textAlign="center" gap={2}>
        <Typography variant="h1">
          Welcome to <span style={{ color: "#005A8D" }}>FakeShop</span>
        </Typography>
        <Typography variant="body1">
          Discover an extensive range of high-quality products at unbeatable
          prices. From the latest fashion trends and electronics to home
          essentials and more, FakeShop offers a seamless shopping experience
          with fast shipping and exceptional customer service. Shop with
          confidence and find everything you need in one place at FakeShop.
        </Typography>

        <Button
          LinkComponent={Link}
          href="/products"
          fullWidth
          variant="contained"
          sx={{
            alignSelf: "end",
          }}
        >
          See Products List
        </Button>
      </Stack>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        style={{ width: "500px" }}
        src="https://plus.unsplash.com/premium_photo-1664202219719-ca23019bbd26?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </Stack>
  );
};
