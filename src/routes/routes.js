import express from 'express';
import { signup } from "../controller/authenticationController.js";

const router = express.Router();
console.log("Setting up /signup route");
router.post('/signup', signup);

export default router;
