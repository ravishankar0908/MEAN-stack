import express from "express";
import { AuthRegister, UserRegistration } from "../controllers/auth.controller.js";


const router = express.Router();

// Get the values from the register
router.get('/register', AuthRegister);

// Insert the user into registration
router.post('/register', UserRegistration);

export default router;