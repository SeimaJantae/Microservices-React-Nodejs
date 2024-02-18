import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// temp comments data
const commentsByPostId = {}; // {"postId" : [{id:"", content: ""}, {id:"", content: ""}], "postId" : [{id:"", content: ""}, {id:"", content: ""}]}

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  // create random id
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  // link to posts servics by post id (req.params.id)
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  res.status(201).send(comments);
});

app.listen(8001, () => {
  console.log("posts server running on port 8001");
});
