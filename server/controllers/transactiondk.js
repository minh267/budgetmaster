import { db } from "../db.js";

export const getTransactions = (req, res) => {
  const userId = req.query.userId;
  const q = `SELECT t.*, u.userid AS userid FROM income_expense AS t JOIN users as u ON (u.userid = t.userId)`;

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addTransaction = (req, res) => {
  const q =
    "INSERT INTO income_expense(`type`,`amount`,`category`, `timestamp`, `userId`) VALUES (?)";
  const value = [
    req.body.type,
    req.body.amount,
    req.body.category,
    req.body.timestamp,
    req.body.userId,
  ];
  db.query(q, [value], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Thêm giao dịch thành công!");
  });
};

export const deleteTransaction = (req, res) => {
  const transactionId = req.params.id;
  const q = "DELETE FROM income_expense WHERE transactionid = ?";

  db.query(q, [transactionId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Giao dịch đã được xóa thành công!");
  });
};

export const updateTransaction = (req, res) => {
  const transactionId = req.params.transactionid;
  const updatedData = req.body;
  const q = "UPDATE income_expense SET ? WHERE transactionid = ?";

  db.query(q, [updatedData, transactionId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Giao dịch đã được cập nhật thành công!");
  });
};
