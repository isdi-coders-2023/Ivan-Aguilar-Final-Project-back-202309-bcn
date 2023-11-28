import "dotenv/config";
import debugCreator from "debug";
import { startServer } from "./server/app.js";
import "./server/index.js";
import chalk from "chalk";
import { connectToDatabase } from "./database/index.js";

const debug = debugCreator("meetMauritius:main");

const port = process.env.PORT ?? 4000;

if (!process.env.MONGODB_URL) {
  debug(chalk.red("Missing MeetMauritius DB connection string"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
debug(chalk.red("Connected to MeetMauritius DB"));

startServer(+port);
