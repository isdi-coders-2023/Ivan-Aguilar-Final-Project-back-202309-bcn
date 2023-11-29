import chalk from "chalk";
import type { Response, Request, NextFunction } from "express";
import CustomError from "../../CustomError/CustomError.js";
import debugCreator from "debug";

const customError = new CustomError("Endpoint not found", 404);

export const notFound = (_req: Request, res: Response, next: NextFunction) => {
  const debug = debugCreator("meetMauritius:server:errors:generalError");
  debug(chalk.red("Endopoint not found"));

  next(customError);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  res.status(statusCode).json({ message: error.message });
};
