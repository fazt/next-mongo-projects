"use client";
import axios from "axios";
import { useForm } from "react-hook-form";

function NewProjectPage() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/projects", data);
    console.log(res);
  });

  return (
    <div>
      <h1>New Project</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            {...register("description", { required: true })}
          />

          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default NewProjectPage;
