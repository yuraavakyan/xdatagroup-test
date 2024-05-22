"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { Product } from "components/models/product.model";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
  const { title, image, description, id } = product;
  return (
    <Card
      sx={{
        p: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "500px",
      }}
    >
      <CardMedia sx={{ minHeight: 140 }} image={image} title={title} />

      <CardContent sx={{ flex: 1, overflow: "hidden" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography
          sx={{
            maxHeight: "140px",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: "end" }}>
        <Link href={`products/${id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
