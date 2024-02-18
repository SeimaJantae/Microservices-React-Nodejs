"use client";
import { useState } from "react";
import axios from "axios";
import { POSTS_SERVICE } from "@/config";

export default function CreatePost() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(POSTS_SERVICE, { title });
      setTitle("");
      window.location.reload();
    } catch (error) {
      setTitle("");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary mt-2">Create</button>
    </form>
  );
}
