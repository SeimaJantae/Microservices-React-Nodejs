"use client";
import { POSTS_SERVICE } from "@/config";
import axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

export default function PostsList() {
  const [posts, setPosts] = useState({});

  const fechPostsData = async () => {
    try {
      const { data } = await axios.get(POSTS_SERVICE);
      setPosts(data);
    } catch (error) {
      setPosts({});
      console.log(error);
    }
  };

  useEffect(() => {
    fechPostsData();
  }, []);

  return (
    <div className="row">
      {Object.values(posts).map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
}
