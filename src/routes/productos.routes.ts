import { Router } from "express";
const router = Router();

import {
  getProducts,
  createProducts,
  getProductoId,
  deleteProduct,
  updateProduct,
} from "../controllers/productos.controller";

router.route("/").get(getProducts).post(createProducts);
router
  .route("/:productId")
  .get(getProductoId)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
