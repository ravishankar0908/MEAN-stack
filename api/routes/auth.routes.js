import express from "express";
import { AuthRegister } from "../controllers/auth.controller.js";

const router = express.Router();

// Get the values from the register
router.get('/register', AuthRegister);

export default router;