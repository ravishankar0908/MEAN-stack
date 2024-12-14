import express from "express";
import { Allusers, DeleteUser, userById, UserRegistration } from "../controllers/auth.controller.js";


const router = express.Router();

// Get the values from the register
router.get('/users', Allusers);

// Insert the user into registration
router.post('/register', UserRegistration);

// getting the user by id
router.get('/users/:id', userById);

// Delete the user by id
router.delete('/users/:id', DeleteUser);

export default router;