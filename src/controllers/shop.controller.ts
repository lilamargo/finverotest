import { Request, Response } from "express";
import { connect } from "../database";
import { ShopInterface } from "../interfaces/shop.interfaces";

export async function getShop(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const users = await conn.query("SELECT * FROM shop");
  return res.json(users[0]);
}
