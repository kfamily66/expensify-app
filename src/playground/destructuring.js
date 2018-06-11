const person = {
  name: "Eugene",
  age: 24,
  location: {
    city: "Lysva",
    temp: 20
  }
};

const { name: firstName = "Anonymos", age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
console.log(`It's ${temperature} in ${city}.`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-published" } = book.publisher;
console.log(publisherName);

const item = ["Coffee", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
