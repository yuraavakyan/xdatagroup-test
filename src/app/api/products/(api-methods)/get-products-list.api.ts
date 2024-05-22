import { Product } from "components/models/product.model";

export const fetchProductsList = async (
  onSuccess: (data: Product[]) => void,
  onError: (err: any) => void,
  params?: any
) => {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error("Something went wrong...");
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error: any) {
    onError(error.message);
  }
};
