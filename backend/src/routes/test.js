import express from "express";
import { postGemini } from "../controller/gemini.js";


const router = express.Router();

router.post("/gemini", postGemini);

export default router;
