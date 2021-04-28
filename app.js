const people = [
  {
    name: 'Heze',
    age: 37,
    position: 'Developer'
  },
  {
    name: 'Victor',
    age: 27,
    position: 'Designer'
  },
  {
    name: 'Eric',
    age: 25,
    position: 'Photographer'
  },
  {
    name: 'Bea',
    age: 41,
    position: 'The Boss'
  },
  {
    name: 'Mara',
    age: 15,
    position: 'Cyber security'
  },
];
const getAges = (person) => person.age;
const oldAge = (person) => person.age + 20

console.log(getAges);

const ages = people.map(getAges);
console.log(ages)


const newPeople = people.map((person) => {
    return{
      firstName:person.name.toUpperCase(),
      oldAge:oldAge(person),
    }
})

console.log(newPeople);
const results = document.querySelector('#results');
const names = people.map( person => `<h3>${person.name}</h3>`)
results.innerHTML = names.join('');