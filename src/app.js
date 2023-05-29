require("dotenv/config");
const express = require("express");
const app = express();
const LoginRout = require("./routes/route");

app.use(express.json());
app.use(LoginRout);

const Port = process.env.PORT || 5656;
app.listen(Port, () => {
  console.log("Express server listening on port " + Port);
});
