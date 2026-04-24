import express from "express";
import database from "better-sqlite3";
import cors from "cors";

const app = express();
const db = new database("shelf.db")

app.use(express.json());
app.use(cors({
origin: 'http://localhost:5173',
methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
allowedHeaders: ['Content-Type', 'Authorization']
}))

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
        db.prepare("INSERT INTO people (id, name, age, num) VALUES (?, ?, ?, ?)")
            .run(req.body.id, req.body.name, req.body.age, req.body.num);
        res.status(201).json();
        console.log("Person with id: " + req.body.id + " added.");
    }
    catch (err){
        res.status(400).json({ error: err.message });
    }
});

app.delete("/data/:id", (req, res) => {
    try {
        let result = db.prepare("DELETE FROM people WHERE id = ?").run(req.params.id);
        if (result.changes === 0) { return res.status(404).json({ error: "Nincs ilyen személy." }); }
        res.status(200).json();
        console.log("person with id: "+ req.params.id + " deleted.");
    }
    catch (err) {
        res.status(400).json({ error: err.message})
    }
});

app.listen(8080, () => {
  console.log('REST API server running on port 8080');
});