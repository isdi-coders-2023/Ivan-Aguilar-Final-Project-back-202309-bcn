import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/errors/generalError.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import routesRouter from "../features/routes/router/routesRouter.js";

const corsPort = process.env.ALLOWED_ORIGIN_URL;
const corsOptions = { origin: corsPort };

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/routes", routesRouter);

app.use(generalError);
app.use(notFound);
