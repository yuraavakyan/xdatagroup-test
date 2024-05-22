"use client";

import { Box, Grid, Stack } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { Product } from "components/models/product.model";
import { FC } from "react";

interface ProductsListComponentProps {
  products: Product[];
}

export const ProductsListComponent: FC<ProductsListComponentProps> = ({
  products,
}) => {
  return (
    <Box>
      <h1>All Products</h1>
      <Grid
        sx={{ display: "flex" }}
        container
        spacing={2}
        columns={{ xs: 1, sm: 2, lg: 4, xl: 6 }}
      >
        {products.map((product) => (
          <Grid
            flex={1}
            xs={1}
            key={product.id}
            item
            height="100%"
            sx={{ height: "100%" }}
          >
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
