import { Router } from "express";
import { methods as UserController } from "../controllers/UserController";

const router = Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.storeUser);

export default router;