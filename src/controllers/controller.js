const Io = require("../utils/Io");
const Register = new Io("./database/data.json");
const RegisterData = require("../models/module");

const PostLogin = async (req, res) => {
  const { username, password, email } = req.body;
  const Data = await Register.read();

  const data = Data.find(
    (item) =>
      (item.username === username || item.email === email) &&
      item.password === password
  );

  if (data) {
    res.status(200).json({
      massage: `Successfully logined ${username}`,
      username: username,
      email: email,
    });
  } else {
    res.status(404).json({
      massage: "Something went wrong",
      username: username || "",
      email: email,
    });
  }
};

const addUser = async (req, res) => {
  const { username, password, email } = req.body;

  const Data = await Register.read();

  const id = (Data[Data.length - 1]?.id || 0) + 1;

  const newData = new RegisterData(id, username, password, email);

  const data = Data.length ? [...Data, newData] : [newData];
  await Register.write(data);
  res.status(201).json({ massage: "Successfully created User" });
};

module.exports = {
  PostLogin,
  addUser,
};
