import { dbConnect } from "@/config/db";
import { Project } from "@/models/project.model";

export async function GET(request) {
  dbConnect();
  const projects = await Project.find();
  return new Response(JSON.stringify(projects));
}

export async function POST(request) {
  dbConnect();
  
  const { name, description } = await request.json();
  const project = await Project.create({
    name,
    description,
  });
  return new Response(JSON.stringify(project));
}
