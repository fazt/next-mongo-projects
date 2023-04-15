import mongoose from "mongoose";

export const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    console.log("Using current connection.");
    return;
  }

  // Use new db connection
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected!");
  } catch (error) {
    console.log("DB Connection Error", error);
  }
};
