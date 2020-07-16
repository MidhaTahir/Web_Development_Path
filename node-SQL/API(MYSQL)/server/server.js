const express = require("express");
const apiRouter = require("./routes");
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json()); //body convert to json
app.use(express.urlencoded({extended:false})) 
app.use("/", apiRouter);

app.listen(process.env.PORT || "5000", () => {
  console.log(`Server started to run on port: ${process.env.PORT || "5000"}`);
});