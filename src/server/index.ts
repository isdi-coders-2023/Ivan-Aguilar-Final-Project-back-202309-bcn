import morgan from "morgan";
import Express from "express";
import cors from "cors";
import app from "./app.js";

const corsPort = process.env.ALLOWED_ORIGIN_URL;
const corsOptions = { origin: corsPort };

app.use(cors(corsOptions));
