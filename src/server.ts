import cors from "cors";
import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";

import { connectToDb } from "./config/mongo-config";
import * as errorHandler from "./middlewares/error-handler";
import * as notFoundHandler from "./middlewares/not-found-handler";
import loginRoute from "./routes/login-route";
import signupRoute from "./routes/signup-route";
import userRoute from "./routes/user-route";

dotenv.config();

const app: Express = express();
const PORT: string | undefined = process.env.PORT;

app.use(cors<Request>());
app.use(express.json());

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/users", userRoute);

app.use(notFoundHandler.handle);
app.use(errorHandler.handle);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "hello mr mouse" });
});

app.listen(PORT, async () => {
  console.log("Server is running ....");
  await connectToDb();
});
