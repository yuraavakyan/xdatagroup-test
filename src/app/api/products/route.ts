import { NextResponse } from "next/server";
import { baseUrl } from "../constants";

export async function GET() {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
