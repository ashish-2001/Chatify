import { Router } from "express";
import { signup } from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/signup", signup);

export {
    authRoutes
};