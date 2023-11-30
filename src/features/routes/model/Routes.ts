import { Schema, model } from "mongoose";
import type { RouteStructure } from "../types";

const routesSchema = new Schema<RouteStructure>({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  numberOfStops: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Route = model("Route", routesSchema, "routes");

export default Route;
