import express from "express"
import { getBook } from "../controler/book.controler.js"

const router = express.Router()

router.get("/book",getBook)

export default router