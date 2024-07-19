const { S3Client } = require("@aws-sdk/client-s3");
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const bucketName = process.env.AWS_BUCKET_NAME;

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log(formData);
  const image = formData.get("image") as any;
  console.log(image.name);

  try {
    if (image && typeof image === "object" && image.name) {
      console.log(image);
      const newImage = Date.now().toString(32) + image.name;
      const filepath = `moreture/services/`;
      const Body = (await image.arrayBuffer()) as Buffer;
      const params = {
        Bucket: `${bucketName}`,
        Key: filepath + newImage,
        Body,
        ContentType: image.type,
      };
      const path = `https://${bucketName}.s3.${
        process.env.AWS_BUCKET_REGION
      }.amazonaws.com/${filepath + newImage}`;
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
      return NextResponse.json({ url: `${path}` });
    }
  } catch (error) {
    return NextResponse.json({ error: "image is required" });
  }
}
