import express from "express";
import { login, signup } from "../controler/user.contoler.js";
const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)

export default router