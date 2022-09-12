// console.log("Hey Louis");

const express = require("express");
const app = express();
const morgan = require("morgan");
const peopleBank = require("./dummyData");

app.use(morgan("dev"));

console.log(peopleBank);

app.get("/health", (req, res) => {
  const health = "Server is online!";
  res.send(health);
});
app.get("/coolPeople", (req, res) => {
  const coolPeople = peopleBank.list();
  res.send(coolPeople);
});
app.get("/coolPeople/:id", (req, res) => {
  const id = req.params.id;
  const person = peopleBank.find(id);
  res.send(person);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
