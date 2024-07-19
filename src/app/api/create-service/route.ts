import { NextResponse } from "next/server";
import { cookiesClient } from "@/src/utils/amplify-utils";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  try {
    if (data.image) {
      const service = await cookiesClient.models.Service.create({
        image: data.image as string,
        name: data.name as string,
        price: Number(data.price),
        description: data.description as string,
        time: Number(data.time),
        typeService:data.type_service,
        typePrice:data.type_price,
        available: true,
      });
    }
    return NextResponse.json({ success: "service created" });
  } catch (error) {
    return NextResponse.json({ error: "Image is required" });
  }
}
