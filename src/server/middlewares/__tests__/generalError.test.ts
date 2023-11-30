import { type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError";
import { generalError } from "../errors/errorsMiddleware";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a generalError middleware", () => {
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next = jest.fn();

  describe("When it receives a response and a 404 error", () => {
    test("Then it should call the respose's method status with a 400 status code", () => {
      const expectedStatusCode = 404;
      const error = new CustomError("errorMessage", expectedStatusCode);

      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  describe("When it receives a response and an error with status code", () => {
    test("Then it should call the response method status with 500", () => {
      const expectedStatusCode = 500;
      const error = new Error("Error of status code");

      generalError(error as CustomError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  describe("When it receives a response with an error with the message `Error`", () => {
    test("Then it shoud call the response method json with a `Private error`message", () => {
      const expectedStatusCode = 400;
      const privateErrorMessage = "Private Error";
      const error = new CustomError(privateErrorMessage, expectedStatusCode);

      generalError(error, req as Request, res as Response, next);

      const errorResponseBody = { message: privateErrorMessage };

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining(errorResponseBody),
      );
    });
  });
});
