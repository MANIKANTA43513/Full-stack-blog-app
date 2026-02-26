// AI Controller (Mock Version - Stable for Interview Demo)

exports.generate = async (req, res) => {
  const { title, content } = req.body;

  try {
    const suggestions = [
      `Related Topic: Advanced insights about "${title}"`,
      `Related Topic: Scaling full-stack applications efficiently`,
      `Intro Suggestion: ${title} is a significant topic in modern web development. In this article, we explore its real-world implementation, best practices, and scalability considerations.`
    ];

    res.json({ suggestions });
  } catch (error) {
    console.error("AI generation error:", error);
    res.status(500).json({ error: "AI generation failed" });
  }
};