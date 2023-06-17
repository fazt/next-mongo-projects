import { formidable } from "formidable";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  console.log(request.body);
  const options = {
    uploadDir: "./uploads",
    keepExtensions: true,
  };
  const form = formidable(options);

  form.parse(req, (err, fields, files) => {
    console.log("fields:", fields);
    console.log("files:", files);
  });

  return new NextResponse({ message: "Hello World" }, 200);
}
