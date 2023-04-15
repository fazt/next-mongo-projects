import ProjectCard from "@/components/projects/ProjectCard";
import axios from "axios";
import Link from "next/link";

async function loadProjects() {
  return axios.get("http://localhost:3000/api/projects");
}

async function DashboardPage() {
  const { data: projects } = await loadProjects();

  if (projects.length === 0) {
    return (
      <div>
        <h1>Not Projects</h1>
        <Link href="/dashboard/projects/new">Create a new project</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Projects</h1>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
