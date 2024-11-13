const express = require("express");
const router = express.Router();
const db = require("../config/db");

// List all users
router.get("/", async (req, res) => {
  try {
    console.log("get people");
    const [rows] = await db.query("SELECT * FROM people");

    let str = ``;
    for (const item of rows) {
      str += `<li>Nome: ${item.name}</li>`;
    }
    res.send(`<h1>Full Cycle Rocks!</h1>
       Lista de nomes cadastrada no banco de dados.
        <ul>
          ${str}
        </ul>
      `);
  } catch (error) {
    res.status(500).json({ message: "Error fetching people", error });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    console.log("insert users");
    await db.query("INSERT INTO people(name) values(?)", [name]);
    res.status(201).json({ message: "People created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating People", error });
  }
});

module.exports = router;
