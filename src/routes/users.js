import { Router } from "express";
import { methods as UserController } from "../controllers/UserController";

const router = Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);
router.post("/", UserController.storeUser);

export default router;