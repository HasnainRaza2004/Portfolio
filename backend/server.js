const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const mysql = require("mysql");
const Sequelize = require("sequelize");

app.use(cors());
const sequelize = new Sequelize("porfolio", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const Skills = sequelize.define(
  "skills",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    tools: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// API endpoint to fetch all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// API endpoint to fetch all skills
app.get("/api/skills", async (req, res) => {
  console.log("trigered");
  try {
    const skills = await Skills.findAll();
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// // API endpoint to fetch a post by ID
// app.get("/api/posts/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((p) => p.id === postId);

//   if (!post) {
//     res.status(404).json({ error: "Post not found" });
//   } else {
//     res.json(post);
//   }
// });

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Failed to synchronize database:", error);
  });
