
import express from 'express';
import "dotenv/config";
import {connectDB} from './config/db.js';
import userRoute from './features/users/route.js';
const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.use("/api/users", userRoute);


// 404
app.use((req, res) => {
  res.status(404).json({
    status: "failed",
    message: `The requested resource was not found ${req.originalUrl}`,
  });
});

connectDB(process.env.MONGO_URI);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});