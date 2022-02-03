import { Request, Response } from "express";

import { connect } from "../database";
import { ProductoInterface } from "../interfaces/productos.interfaces";

export async function getProducts(
  req: Request,
  res: Response
): Promise<Response> {
  const conn = await connect();
  const productos = await conn.query("SELECT * FROM products");
  return res.json(productos[0]);
}

export async function createProducts(req: Request, res: Response) {
  const newProduct: ProductoInterface = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO products SET ?", [newProduct]);
  return res.json({
    message: "Producto Creado",
  });
}

export async function getProductoId(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.productId;
  const conn = await connect();
  const productos = await conn.query("SELECT * FROM products WHERE id = ?", [
    id,
  ]);
  return res.json(productos[0]);
}

export async function deleteProduct(req: Request, res: Response) {
  const id = req.params.productId;
  const conn = await connect();
  await conn.query("DELETE FROM products WHERE id = ?", [id]);
  return res.json({ message: "Producto Eliminado" });
}

export async function updateProduct(req: Request, res: Response) {
  const id = req.params.productId;
  const updateProduct: ProductoInterface = req.body;
  const conn = await connect();
  await conn.query("UPDATE products SET ? WHERE id = ?", [updateProduct, id]);
  return res.json({ message: "Producto Actualizado" });
}
