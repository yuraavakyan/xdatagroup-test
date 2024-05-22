"use client";

import { useEffect, useState } from "react";
import { fetchProductsList } from "../api/products/(api-methods)/get-products-list.api";
import { redirect } from "next/navigation";
import { ProductsListComponent } from "components/components/products-list/ProductsList";
import { Product } from "components/models/product.model";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("logged")) {
      redirect("/login");
    }
  }, []);

  useEffect(() => {
    fetchProductsList((data: Product[]) => {
      setProducts(data);
      setLoading(false);
    }, setError);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ProductsListComponent products={products} />;
};

export default ProductsPage;
