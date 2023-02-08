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
        console.log(req.body);
        const connection = await getConnection();

        res.send("User created");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
  getUsers,
  storeUser
};
