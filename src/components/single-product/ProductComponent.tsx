import { Box, Button, Stack, Typography } from "@mui/material";
import { Product } from "components/models/product.model";
import CartIcon from "@mui/icons-material/ShoppingBag";
import { FC } from "react";

interface SingleProductComponentProps {
  product: Product;
}

export const SingleProductComponent: FC<SingleProductComponentProps> = ({
  product,
}) => {
  return (
    <Box p={4}>
      <Stack direction="row" gap={2} justifyContent="space-between">
        <Box width={"500px"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt="" style={{ width: "400px" }} />
        </Box>
        <Stack p={2}>
          <Typography variant="h3" sx={{ mb: 4 }}>
            {product.title}
          </Typography>
          <Typography variant="h6" flex={1}>
            {product.description}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1} alignSelf={"end"}>
            <Typography variant="body1">{`${product.price} $`}</Typography>
            <Button variant="contained" startIcon={<CartIcon />}>
              Add to Cart
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
