import { Request, Response } from "express";
import { connect } from "../database";
import { ShopInterface } from "../interfaces/shop.interfaces";

export async function getShop(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const users = await conn.query("SELECT * FROM shop");
  return res.json(users[0]);
}

export async function createShop(req: Request, res: Response) {
  const newShop: ShopInterface = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO shop SET ?", [newShop]);
  return res.json({
    message: "Comercio Creado Correctamente",
  });
}

export async function getShopId(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.shopId;
  const conn = await connect();
  const shop = await conn.query("SELECT * FROM shop WHERE id = ?", [id]);
  return res.json(shop[0]);
}

export async function deleteShop(req: Request, res: Response) {
  const id = req.params.shopId;
  const conn = await connect();
  await conn.query("DELETE FROM shop WHERE id = ?", [id]);
  return res.json({ message: "Comercio Eliminado Correctamente" });
}

export async function updateShop(req: Request, res: Response) {
  const id = req.params.userId;
  const updateShop: ShopInterface = req.body;
  const conn = await connect();
  await conn.query("UPDATE shop SET ? WHERE id = ?", [updateShop, id]);
  return res.json({
    message: "Información de Comercio Actualizada Correctamente",
  });
}
