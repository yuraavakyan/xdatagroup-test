import { Product } from "components/models/product.model";

export const fetchProductById = async (
  id: string,
  onSuccess: (data: Product) => void,
  onError: (err: any) => void
) => {
  try {
    const response = await fetch(`/api/products/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong...");
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error: any) {
    onError(error.message);
  }
};
