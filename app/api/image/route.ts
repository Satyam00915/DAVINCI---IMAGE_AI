import { image } from "framer-motion/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  function generateRandomSeed() {
    return Math.floor(Math.random() * 10000000) + 1;
  }

  const randomSeed = generateRandomSeed();

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}&seed=${randomSeed}`;

  await fetch(imageUrl);

  return NextResponse.json({
    url: imageUrl,
  });
}
export async function GET() {
  return NextResponse.json({
    message: "Ok get",
  });
}
