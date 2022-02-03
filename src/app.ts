import express, { Application } from "express";
import morgan from "morgan";

//Routes
import IndexRoutes from "./routes/index.routes";
import ProductosRoutes from "./routes/productos.routes";
import UserRoutes from "./routes/users.routes";
import ShopRoutes from "./routes/shop.routes";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3008);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use("/productos", ProductosRoutes);
    this.app.use("/users", UserRoutes);
    this.app.use("/shop", ShopRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}
