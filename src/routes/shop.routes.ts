import { Router } from "express";
const router = Router();

import {
  getShop,
  createShop,
  getShopId,
  deleteShop,
  updateShop,
} from "../controllers/shop.controller";

router.route("/").get(getShop).post(createShop);
router.route("/:shopId").get(getShopId).delete(deleteShop).put(updateShop);

export default router;
