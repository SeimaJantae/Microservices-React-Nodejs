import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// temp posts data
const posts = {}; // {"postId": {id: "", title: ""}, "postId": {id: "", title: ""}}

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  // create random id
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(8000, () => {
  console.log("posts server running on port 8000");
});
