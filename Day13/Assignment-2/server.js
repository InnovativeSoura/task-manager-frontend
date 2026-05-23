const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Users with age field
const users = [
  { id: 1, name: "Souradipta", age: 22 },
  { id: 2, name: "Soumi", age: 22 },
  { id: 3, name: "Amit", age: 19 },
  { id: 4, name: "Mutki", age: 16 }
];

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Search users by name
app.get("/users/search", (req, res) => {
  const name = req.query.name;

  const matchedUsers = users.filter(
    user => user.name.toLowerCase() === name.toLowerCase()
  );

  res.json(matchedUsers);
});

// Adults route (age >= 18)
app.get("/users/adults", (req, res) => {
  const adults = users.filter(user => user.age >= 18);

  res.json(adults);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});