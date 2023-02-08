import privateRoutes from "./private";

const setupRoutes = (app) => {
    app.use("/users", privateRoutes);
};

export default setupRoutes;