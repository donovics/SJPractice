const express = require('express');
const app = express();

app.use(express.json());

let people = [
    { id: 1, name: "Peter", age: 22, num: 16},
    { id: 2, name: "Scarlet", age: 21, num: 4},
    { id: 3, name: "John", age: 222, num: 0}
];

app.get("/data", (req, res) => { res.status(200).json(people); console.log("People listed."); });

app.post("/data", (req, res) => { let newPerson = 
{
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    num: req.body.num
};
    people.push(newPerson);
    res.status(201).json();
    console.log("Person added.");
});

app.listen(8080, () => {
  console.log('REST API server running on port 8080');
});