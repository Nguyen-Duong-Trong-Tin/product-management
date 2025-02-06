import mongoose from "mongoose";

const connect = async (): Promise<void> => {
  try {
    const databaseUrl = process.env.DATABASE_URL as string;

    await mongoose.connect(databaseUrl);
    console.log("Connect success.");
  } catch {
    console.log("Connect error.");
  }
}

const database = { connect };
export default database;