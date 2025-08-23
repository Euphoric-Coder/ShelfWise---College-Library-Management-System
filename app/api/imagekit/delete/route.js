import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: config.env.imagekit.publicKey,
  privateKey: config.env.imagekit.privateKey,
  urlEndpoint: config.env.imagekit.urlEndpoint,
});

export async function POST(req) {
  try {
    const { fileId } = await req.json();
    console.log(fileId);
    const result = await imagekit.deleteFile(fileId);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
