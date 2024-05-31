import mongoose from "mongoose";


export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any); // Use type assertion to specify options as 'any'
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    throw new Error("Unable to connect to MongoDB");
  }
}
