import { db } from "../db.js";

export const getSavings = (req, res) => {
  const q = `SELECT * FROM savings_goal;`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addSaving = (req, res) => {
  const q =
    "INSERT INTO savings_goal(`goalname`,`targetamount`, `startdate`, `enddate`,`suId`) VALUES (?)";
  const value = [
    req.body.goalname,
    req.body.targetamount,
    req.body.startdate,
    req.body.enddate,
    req.body.suId,
  ];
  db.query(q, [value], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Thêm tích lũy thành công!");
  });
};

export const deleteSaving = (req, res) => {
  const goalId = req.params.goalid;
  const q = "DELETE FROM savings_goal WHERE goalid = ?";

  db.query(q, [goalId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Tích lũy đã được xóa thành công!");
  });
};

export const updateSaving= (req, res) => {
  const goalId = req.params.goalid;
  const updatedData = req.body;
  const q = "UPDATE savings_goal SET ? WHERE goalid = ?";

  db.query(q, [updatedData, goalId], (err, data) => {
    console.error(data);
    if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
    return res.status(200).json("Tích lũy đã được cập nhật thành công!");
  });
};
