import express from "express";
import morgan from "morgan";

const app = express();

// Settings 
app.set("port", 4000);

// Middleware
app.use(morgan("dev"));

export default app;