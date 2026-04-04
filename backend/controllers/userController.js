const bcrypt = require("bcrypt");
const db = require("../db");

// Register
exports.register = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const { rows: existing } = await db.query(
      "SELECT id FROM users WHERE username = $1 OR email = $2",
      [username, email],
    );

    if (existing.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const result = await db.query(
      "INSERT INTO users (username, passwordhash, email) VALUES ($1, $2, $3) RETURNING id",
      [username, hash, email],
    );

    res.json({
      message: "User created",
      userId: result.rows[0].id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating user" });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = rows[0];

    const valid = await bcrypt.compare(password, user.passwordhash);

    if (!valid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({
      message: "Login success",
      userId: user.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
