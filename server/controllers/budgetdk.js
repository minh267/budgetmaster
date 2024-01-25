import { db } from "../db.js";

export const getBudgets = (req, res) => {
  const q = `SELECT * FROM monthly_budget;`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addBudget = (req, res) => {
  const q =
    "INSERT INTO monthly_budget(`budgetname`,`startdatebg`,`enddatebg`, `totalbudget`, `bduId`) VALUES (?)";
  const value = [
    req.body.budgetname,
    req.body.startdatebg,
    req.body.enddatebg,
    req.body.totalbudget,
    req.body.bduId,
  ];
  db.query(q, [value], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Thêm ngân sách thành công!");
  });
};

export const deleteBudget = (req, res) => {
  const budgetId = req.params.budgetid;
  const q = "DELETE FROM monthly_budget WHERE budgetid = ?";

  db.query(q, [budgetId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Ngân sách đã được xóa thành công!");
  });
};

export const updateBudget = (req, res) => {
  const budgetId = req.params.budgetid;
  const updatedData = req.body;
  const q = "UPDATE monthly_budget SET ? WHERE budgetid = ?";

  db.query(q, [updatedData, budgetId], (err, data) => {
    console.error(data);
    if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
    return res.status(200).json("Giao dịch đã được cập nhật thành công!");
  });
};
