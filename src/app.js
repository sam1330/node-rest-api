import express from "express";
import morgan from "morgan";
import setupRoutes from "./routes/setupRoutes";


const app = express();

// Settings 
app.set("port", 4000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Use Routes
setupRoutes(app);

export default app;