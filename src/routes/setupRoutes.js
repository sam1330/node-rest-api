import usersRoutes from "./users";

const setupRoutes = (app) => {
    app.use("/users", usersRoutes);
};

export default setupRoutes;