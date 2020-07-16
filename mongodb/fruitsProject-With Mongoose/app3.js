//Update and Delete

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

const fruit = new Fruit({
  rating: 10,
  review: "Peachy",
});

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

//Update data
Fruit.updateOne(
  { _id: "5f10b47a29ec0a211c8d578b" },
  { name: "Peach" },
  function (err) {
    if (err) console.log(err);
    else console.log("Successfully updated the document");
  }
);

//Delete data
Fruit.deleteOne({ _id: "5f10b48cafec052538ff671b" }, function (err) {
  if (err) console.log(err);
  else console.log("Successfully deleted this document");
});

//Delete many
Fruit.deleteMany(
  {
    name: "Apple",
  },
  function (err) {
    if (err) console.log(err);
    else console.log("Successfully deleted Apple from fruits collection");
  }
);
