const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");
const contactModel = require("./contactModel");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors("*"));

app.post("/contact", async (req, res) => {
  try {
    // const name = req.body.name;
    const { name, email, phone, subject, msg } = req.body ?? {};
    console.log(req.body);
    if (!name || !email || !phone || !msg || !subject)
      return res.status(200).json({
        status: 0,
        msg: "name, email, phone, subject, msg  fields are required",
      });
    const contact = await contactModel.create({
      name: name,
      email: email,
      phone: parseInt(phone),
      subject: subject,
      msg: msg,
    });
    if (!contact)
      return res.status(200).json({ status: 0, msg: "Data not save" });
    return res.status(200).json({ status: 1, data: contact });
  } catch (err) {
    console.log(err);
    res.status(400).json("Something error");
  }
});

app.get("/contact", async (req, res) => {
  try {
    const contactData = await contactModel.find();
    if (!contactData)
      return res.status(200).json({ status: 0, msg: "Data not found" });
    if (contactData.length < 1)
      return res.status(200).json({ status: 0, msg: "Data not found" });
    return res.status(200).json({ status: 1, data: contactData });
  } catch (err) {
    console.log(err);
    res.status(400).json("Something error");
  }
});

app.get("/", async (req, res) => {
  try {
    let count = 0;
    // const data = fs.readFileSync("./data.json", {
    //   encoding: "utf8",
    //   flag: "r",
    // });
    // console.log(data);

    fs.readFile("./data.json", function (err, data) {
      if (err) return;
      console.log(data.toString());
    });

    for (let i = 0; i < 5; i++) {
      count += 1;
    }
    console.log(count);
    console.log("Hello world");

    res.status(200).json({ status: 1, data: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 0, data: "something error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB CONNECTED SUCCESSFULLY`);
  })
  .catch((err) => {
    console.log(err);
  });
