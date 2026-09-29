import express from "express";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req: any, res: any) => {
    res.send("Wellcome to my first API with Node.js");
});

app.use("/tasks", taskRoutes);

app.listen(3000, () => {
    console.log("Server listing on port 3000");
});