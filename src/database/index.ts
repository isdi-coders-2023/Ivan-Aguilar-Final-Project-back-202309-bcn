import "dotenv/config";
import debug from "debug";
import mongoose from "mongoose";
import chalk from "chalk";

export const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    debug(chalk.blue("Connected to MeetMauritius DB"));
  } catch (error) {
    debug(chalk.red("Missing connection to MeetMauritius DB"));
  }
};
