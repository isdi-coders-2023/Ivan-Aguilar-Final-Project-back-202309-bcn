import app from "../../../../server/app";
import "../../../../server/index";
import "../../../../setupTests";
import request from "supertest";
import Route from "../../model/Routes";
import routesMocks from "../../mocks/routesMocks";
import type { RouteStructure } from "../../types";

describe("Given a GET method '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with status code 200 and a list of routes", async () => {
      const expectedStatusCode = 200;
      const path = "/routes";

      await Route.create(routesMocks[0]);
      await Route.create(routesMocks[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = (await response.body) as {
        routes: RouteStructure[];
      };

      responseBody.routes.forEach((route, routePosition) => {
        expect(route).toHaveProperty("name", routesMocks[routePosition].name);
      });
    });
  });
});
