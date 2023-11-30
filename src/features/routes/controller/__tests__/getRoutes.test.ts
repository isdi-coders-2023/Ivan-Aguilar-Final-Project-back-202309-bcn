import { type Request, type Response } from "express";
import routesMocks from "../../mocks/routesMocks";
import type { RoutesRepository } from "../../repository/types";
import RoutesController from "../RoutesController";
import { type RouteData } from "../../types";

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("Given a method getRoutes from a RoutesController", () => {
  const routes: RouteData[] = routesMocks;

  const routesRepository: RoutesRepository = {
    getRoutes: jest.fn().mockResolvedValue(routes),
  };

  const routesController = new RoutesController(routesRepository);

  describe("When it receives a request to getRoutes", () => {
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should invoke its method status with a status code 200", async () => {
      const expectedStatusCode = 200;

      await routesController.getRoutes(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should invoke its method json with the routes collection", async () => {
      const expectedCollection = routesMocks;

      await routesController.getRoutes(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ routes: expectedCollection });
    });
  });
});
