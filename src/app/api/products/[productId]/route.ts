import { NextRequest, NextResponse } from "next/server";
import { baseUrl } from "../../constants";

export async function GET(
  request: Request,
  { params }: { params: { productId: number } }
) {
  try {
    const response = await fetch(`${baseUrl}/${params.productId}`);

    if (!response.ok) {
      throw new Error("Something went wrong...");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
