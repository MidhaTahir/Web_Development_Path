// Establishing relationships and embedding documents with mongoose

const mongoose = require("mongoose");
const { Db } = require("mongodb");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  // name : String,
  name: {
    type: String,
    required: [
      true,
      "Please check your data entry again, you foregt to enter fruit",
    ],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// fruit.save();

Fruit.find(function (err, fruits) {
  if (err) console.log(err);
  else {
    console.log(fruits);
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    mongoose.connection.close();
  }
});

//Person Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema, //embedding fruits document inside it
});

const Person = mongoose.model("Person", personSchema);

//create new fruit pineapple
const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit",
});
pineapple.save();

// const person = new Person({
//   name: "Amy",
//   age: 30,
//   favouriteFruit:pineapple
// });

// person.save();

//Update record
const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Great fruit",
});
mango.save();

//Update data
Person.updateOne({ name: "Amy" }, { favouriteFruit: mango }, function (err) {
  if (err) console.log(err);
  else console.log("Successfully updated the document");
});
person.save();
