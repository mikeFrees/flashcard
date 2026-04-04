const db = require("../db");

exports.getCards = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT f.id, f.category, f.question, f.answer, c."knownCount"
   FROM flashcards f
   JOIN "cardsOfUser" c ON f.id = c."flashcardId"
   JOIN users u ON c."userId" = u.id
   WHERE u.username = $1`,
      ['system_guest'],
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
};

exports.createCard = async (req, res) => {
  const { userId, question, answer, category } = req.body;

  const client = await db.connect();

  try {
    await client.query("BEGIN");

    const result = await client.query(
      "INSERT INTO flashcards (category, question, answer) VALUES ($1, $2, $3) RETURNING id",
      [category, question, answer],
    );

    const flashcardId = result.rows[0].id;

    await client.query(
      `INSERT INTO "cardsOfUser" ("userId", "flashcardId") VALUES ($1, $2)`,
      [userId, flashcardId],
    );

    await client.query("COMMIT");

    res.status(201).json({
      id: flashcardId,
      category,
      question,
      answer,
      knowCount: 0,
    });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    res.status(500).json({ error: "Card creation failed" });
  } finally {
    client.release();
  }
};
