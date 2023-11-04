const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
      const data = {
        email: email,
        password: hashedPassword, // Store the hashed password
      };
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      // Retrieve the hashed password from the database
      const hashedPasswordFromDB = user.password;

      // Compare the provided password with the stored hash
      const passwordsMatch = await bcrypt.compare(password, hashedPasswordFromDB);

      if (passwordsMatch) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Login failed" });
      }
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
