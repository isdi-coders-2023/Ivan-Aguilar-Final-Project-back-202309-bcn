import Route from "../model/Routes.js";
import { type RouteStructure } from "../types";
import { type RoutesRepository } from "./types";

class RoutesMongooseRepository implements RoutesRepository {
  public async getRoutes(): Promise<RouteStructure[]> {
    const routes = await Route.find().limit(10);

    return routes;
  }
}
