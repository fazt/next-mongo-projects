"use client"
import { useRouter } from "next/navigation";

function ProjectCard({ project }) {
  const router = useRouter();

  return (
    <div
      className="bg-slate-200 shadow-lg rounded-md p-4 mb-2 hover:bg-slate-300"
      onClick={() => router.push(`/dashboard/projects/${project._id}`)}
    >
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
