// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Example in-memory user data
const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' }
];

app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  console.log("User", user)
  if (user) {
    // Successful login
    res.json({ success: true, message: 'Login successful' });
  } else {
    // Invalid credentials
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
