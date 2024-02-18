"use client";
import { useState } from "react";
import axios from "axios";
import { COMMENTS_SERVICE, POSTS_SERVICE } from "@/config";

export default function CreateComment({ postId }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${COMMENTS_SERVICE}/${postId}/comments`, { content: content });
      setContent("");
      window.location.reload();
    } catch (error) {
      setContent("");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Comment</label>
        <input
          className="form-control"
          type="text"
          name="comment"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary mt-2">Create</button>
    </form>
  );
}
