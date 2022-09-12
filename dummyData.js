const data = [
  {
    id: 1,
    coolPerson: "Kathy",
    coolFactor: 29,
  },
  {
    id: 2,
    coolPerson: "Billy",
    coolFactor: 15,
  },
  {
    id: 3,
    coolPerson: "Sarah",
    coolFactor: 11,
  },
];

const list = () => {
  return [...data];
};

const find = (id) => {
  const person = data.find((person) => person.id === +id);
  return { ...person };
};

module.exports = { list: list, find: find };
