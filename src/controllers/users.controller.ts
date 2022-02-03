import { Request, Response } from "express";
import { connect } from "../database";
import { UserInterface } from "../interfaces/users.interfaces";

export async function getUsers(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const users = await conn.query("SELECT * FROM users");
  return res.json(users[0]);
}

export async function createUser(req: Request, res: Response) {
  const newUser: UserInterface = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO users SET ?", [newUser]);
  return res.json({
    message: "Usuario Creado Correctamente",
  });
}

export async function getUserId(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.userId;
  const conn = await connect();
  const users = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
  return res.json(users[0]);
}

export async function deleteUser(req: Request, res: Response) {
  const id = req.params.userId;
  const conn = await connect();
  await conn.query("DELETE FROM users WHERE id = ?", [id]);
  return res.json({ message: "Usuario Eliminado Correctamente" });
}

export async function updateUser(req: Request, res: Response) {
  const id = req.params.userId;
  const updateUser: UserInterface = req.body;
  const conn = await connect();
  await conn.query("UPDATE users SET ? WHERE id = ?", [updateUser, id]);
  return res.json({
    message: "Información de Usuario Actualizada Correctamente",
  });
}
