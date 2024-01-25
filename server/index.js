import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import tranRoutes from "./routes/transaction.js"
import budgetRoutes from "./routes/budget.js"
import savingRoutes from "./routes/saving.js"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()


app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/server/users", userRoutes)
app.use("/server/auth", authRoutes)
app.use("/server/transaction", tranRoutes)
app.use("/server/budget", budgetRoutes)
app.use("/server/saving", savingRoutes)


// app.get("/test", (req, res)=>{
//     res.json("Ok!")
// })

app.listen(8800,()=>{
    console.log("Connected!");
})

