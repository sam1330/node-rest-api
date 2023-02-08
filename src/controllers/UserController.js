import { getConnection } from "../database/database";

const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name FROM users");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const storeUser = async (req, res) => {
    try {
        const { username, password, name } = req.body;

        if (!username || !password || !name) {
            res.send("Error. Please fill all the fields");
        }

        const newUser = { username, password, name };
        const connection = await getConnection();
        const result = await connection.query(
            "INSERT INTO users SET ?",
            newUser
        );
        res.send("User created");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT id, name FROM users WHERE id = ?",
            id
        );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(
            "DELETE FROM users WHERE id = ?",
            id
        );

        res.send("User deleted");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { username, password, name } = req.body;
		const { id } = req.params;

        if (!username || !password || !name) {
            res.send("Error. Please fill all the fields");
        }

        const newUser = { username, password, name };
        const connection = await getConnection();
        const result = await connection.query(
            "UPDATE users SET ? WHERE id = ?",
            [newUser, id]
        );
        res.send("User updated");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getUsers,
    storeUser,
    getUser,
    deleteUser,
    updateUser,
};
