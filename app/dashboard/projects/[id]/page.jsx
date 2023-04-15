function ProjectPage({ params }) {
  
  return (
    <div>
      <h1>Project Page</h1>
      <p>Project ID: {params.id}</p>
    </div>
  );
}

export default ProjectPage;
