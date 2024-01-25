import express from "express";
import {  getBudgets, addBudget, deleteBudget, updateBudget } from "../controllers/budgetdk.js";

const router = express.Router();

router.get("/", getBudgets)
router.post("/", addBudget)
router.delete("/:budgetid", deleteBudget)
router.put("/:budgetid", updateBudget)

export default router;

