require("dotenv").config();
const express = require("express");

const peopleRoutes = require("./routes/peopleRoutes");

const app = express();
app.use(express.json());

app.use("/", peopleRoutes);

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
