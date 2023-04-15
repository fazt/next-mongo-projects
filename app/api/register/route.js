import { dbConnect } from "@/config/db";
import { User } from "@/models/user.model";

export async function POST(request) {
  dbConnect();

  try {
    const body = await request.json();
    console.log(body)
    const user = await User.create(body);

    return new Response(JSON.stringify(user), {
      status: 201,
    });
  } catch (error) {
    return new Response(error, {
      status: 400,
    });
  }
}
