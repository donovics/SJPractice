const express = require("express");
const app = express();
const database = require("better-sqlite3");
const db = new database("shelf.db")

app.use(express.json());

db.exec(`
    CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    num INTEGER
    )
    `);

app.get("/data", (req, res) => { 
    let people = db.prepare("SELECT * FROM people").all();
    res.status(200).json(people);
    console.log("People listed.");
});

app.post("/data", (req, res) => {
    try{
        // const { id, name, age, num } = req.body;
        let result = db.prepare("INSERT INTO people (id, name, age, num) VALUES (?, ?, ?, ?)")
            .run(req.body.id, req.body.name, req.body.age, req.body.num);
        res.status(201).json();
        console.log("Person added.");
    }
    catch (err){
        res.status(400).json({ error: err.message });
    }
});

app.listen(8080, () => {
  console.log('REST API server running on port 8080');
});