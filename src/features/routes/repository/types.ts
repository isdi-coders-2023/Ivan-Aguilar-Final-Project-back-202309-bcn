import type { RouteStructure } from "../types";

export interface RoutesRepository {
  getRoutes: () => Promise<RouteStructure[]>;
}
