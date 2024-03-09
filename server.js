const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://sutharsan0202:oTmrggiwgxVAB7YQ@cluster0.uxfnbqs.mongodb.net/mongologin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const UserSchema = new mongoose.Schema({
  Useremail: String,
  password: String
}, { collection: 'userdetails' });

const User = mongoose.model("User", UserSchema);

app.post("/signup", async function (req, res) {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await user.save();
    res.status(200).json({ message: "Registered Successfully" }); 
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ error: "Error in registration" }); // Send JSON response for error
  }
});

// POST route to login
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  let email = username;
  try {
    const user = await User.findOne({ email });
    console.log(email, user);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
