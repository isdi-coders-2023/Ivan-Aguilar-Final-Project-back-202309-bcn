import { Router } from "express";
import RoutesMongooseRepository from "../repository/RoutesMongooseRepository.js";
import RoutesController from "../controller/RoutesController.js";

const routesRouter = Router();

const routesRepository = new RoutesMongooseRepository();

const routesController = new RoutesController(routesRepository);

routesRouter.get("/", routesController.getRoutes);

export default routesRouter;
