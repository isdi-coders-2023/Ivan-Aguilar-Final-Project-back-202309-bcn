import "dotenv/config";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { connectToDatabase } from "./database/index.js";
import "./server/index.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoUrl = server.getUri();
  await connectToDatabase(mongoUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});
