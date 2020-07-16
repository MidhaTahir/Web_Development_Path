const mongoose = require("mongoose");

//if fruitsDB does not exist it will create it for us
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//creating schema (for every document)
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

//Mongoose model
//name of collection(specify singular name of collection, and mongoose cleverly convert this to fruits collection ie by lower casing F to f and adding s to make it plural)
//behind the scene it is using Lodash for this clever thing
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Pretty solid",
}); //document

fruit.save(); //save fruit document in fruit collection

const banana = new Fruit({
  name: "Banana",
  score: 9,
  review: "Great fruit",
});

const orange = new Fruit({
  name: "Orange",
  score: 10,
  review: "Great fruit",
});

// Fruit.insertMany([orange, banana], function (err) {
//   if (err) console.log(err);
//   else console.log("Successfully saved all fruits to fruitsDB");
// });

Fruit.find(function (err, fruits) {
  //callback function
  // fruits are whatever find() returns -> a js object within array having all our documents

  if (err) console.log(err);
  else{
    fruits.forEach(fruit => {console.log(fruit.name)});
    mongoose.connection.close(); //write wherever we want to close connection
  }
});
