import type { Request, Response } from "express";
import { type RoutesRepository } from "../repository/types";

class RoutesController {
  constructor(private readonly routesRepository: RoutesRepository) {}

  public getRoutes = async (req: Request, res: Response): Promise<void> => {
    const routes = await this.routesRepository.getRoutes();

    res.status(200).json({ routes });
  };
}

export default RoutesController;
