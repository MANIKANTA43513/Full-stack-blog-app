const db = require("../db");

exports.create = (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author)
    return res.status(400).json({ error: "All fields required" });

  db.run(
    "INSERT INTO blogs (title, content, author) VALUES (?, ?, ?)",
    [title, content, author],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Created", postId: this.lastID });
    }
  );
};

exports.getAll = (req, res) => {
  db.all("SELECT * FROM blogs ORDER BY created_at DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getOne = (req, res) => {
  db.get("SELECT * FROM blogs WHERE id=?", [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Not found" });
    res.json(row);
  });
};

exports.update = (req, res) => {
  const { title, content, author } = req.body;
  db.run(
    "UPDATE blogs SET title=?, content=?, author=?, updated_at=CURRENT_TIMESTAMP WHERE id=?",
    [title, content, author, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Updated" });
    }
  );
};

exports.remove = (req, res) => {
  db.run("DELETE FROM blogs WHERE id=?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Deleted" });
  });
};