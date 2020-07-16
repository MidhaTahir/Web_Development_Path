//Validations (check documnetation for clearer view)

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
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
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 9,
  review: "Pretty solid",
});

fruit.save();

Fruit.find(function (err, fruits) {
  if (err) console.log(err);
  else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    mongoose.connection.close();
  }
});
