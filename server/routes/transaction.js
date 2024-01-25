import express from "express";
import {  getTransactions, addTransaction, deleteTransaction, updateTransaction } from "../controllers/transactiondk.js";

const router = express.Router();

router.get("/", getTransactions)
router.post("/", addTransaction)
router.delete("/:id", deleteTransaction)
router.put("/:transactionid", updateTransaction)

export default router;
