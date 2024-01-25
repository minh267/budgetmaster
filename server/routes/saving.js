import express from "express";
import {  getSavings, addSaving, deleteSaving, updateSaving } from "../controllers/savingdk.js";

const router = express.Router();

router.get("/", getSavings)
router.post("/", addSaving)
router.delete("/:goalid", deleteSaving)
router.put("/:goalid", updateSaving)

export default router;

