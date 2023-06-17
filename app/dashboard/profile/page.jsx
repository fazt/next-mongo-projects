"use client"
import axios from "axios";

function ProfilePage() {
  const onFileUploadChange = async (e) => {
    console.log("From onFileUploadChange");

    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith("image")) {
      alert("Please select a valide image");
      return;
    }

        const formData = new FormData();
        formData.append("file", file);

  try {
    
    const res = await axios.post("/api/profile", formData);
    console.log(res);
  } catch (error) {
   console.error(error) 
  }
  };
  return (
    <form action="">
      <input name="file" type="file" onChange={onFileUploadChange} />
    </form>
  );
}

export default ProfilePage;
