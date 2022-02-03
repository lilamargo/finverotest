import { Router } from "express";
const router = Router();

import { getShop } from "../controllers/shop.controller";

router.route("/").get(getShop);
// router.route("/:userId").get(getUserId).delete(deleteUser).put(updateUser);

export default router;
