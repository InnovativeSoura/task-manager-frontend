const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Sample users
const users = [
  { id: 1, name: "Souradipta" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Souradipta" },
  { id: 4, name: "Mutki" }
];

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Search route
app.get("/users/search", (req, res) => {
  const name = req.query.name;

  const matchedUsers = users.filter(
    user => user.name.toLowerCase() === name.toLowerCase()
  );

  res.json(matchedUsers);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});