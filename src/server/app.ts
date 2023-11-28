import "dotenv/config";
import express from "express";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("meetMauritius:server:app");
const app = express();
app.disable("x-powered-by");

export const startServer = (port: number) => {
  app.listen(+port, () => {
    debug(chalk.green(`Server is listening on http://localhost:${port}`));
  });
};

export default app;
