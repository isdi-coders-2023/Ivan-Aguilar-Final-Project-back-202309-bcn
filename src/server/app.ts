import express from "express";

const app = express();

export const startServer = (port: number) => {
  app.listen(port, () => {
    "Server is listening 👋";
  });
};

export default app;
