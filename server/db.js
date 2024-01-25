import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "budgetmaster",
  port: 3306,
  charset: "utf8mb4",
});

db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối đến MySQL:", err);
    return;
  }
  console.log("Đã kết nối đến cơ sở dữ liệu MySQL");
});

// // Kiểm tra kết nối
// db.getConnection((err, connection) => {
//   if (err) {
//       console.error("Lỗi khi kết nối đến cơ sở dữ liệu:", err);
//   } else {
//       console.log("Kết nối cơ sở dữ liệu thành công!");

//       // Thực hiện truy vấn đơn giản để kiểm tra
//       connection.query("SELECT 1", (error, results) => {
//           connection.release(); // Giải phóng kết nối
//           if (error) {
//               console.error("Lỗi khi thực hiện truy vấn:", error);
//           } else {
//               console.log("Truy vấn thành công!");
//           }
//       });
//   }
// });
// export default db.promise();
