const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/router");
const multer = require("multer")
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

mongoose.connect("mongodb+srv://dheerubhai2000:gqG*2JVkTEt5T*G@cluster0.hk6qb.mongodb.net/group1Database", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err.message))

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app is Running on port " + (process.env.PORT || 3000))
});
