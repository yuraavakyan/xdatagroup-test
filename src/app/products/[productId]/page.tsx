"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { SingleProductComponent } from "components/components/single-product/ProductComponent";
import { Product } from "components/models/product.model";
import { fetchProductById } from "components/app/api/products/(api-methods)/get-product-by-id.api";

const SingleProductPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("logged")) {
      redirect("/login");
    }
  }, []);

  useEffect(() => {
    fetchProductById(
      params?.productId,
      (data: Product) => {
        setProduct(data);
        setLoading(false);
      },
      setError
    );
  }, [params?.productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <SingleProductComponent product={product!} />;
};

export default SingleProductPage;
