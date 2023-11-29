import type { Types } from "mongoose";

export interface RouteData {
  image: string;
  name: string;
  duration: number;
  zone: string;
  price: number;
  numberOfStops: number;
  description: string;
}

export interface RouteStructure extends RouteData {
  _id: Types.ObjectId;
}
