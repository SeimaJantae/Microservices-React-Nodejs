"use client";
import { COMMENTS_SERVICE, POSTS_SERVICE } from "@/config";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CommentsList({ postId }) {
  const [comments, setComments] = useState([]);

  const fechCommentsData = async () => {
    try {
      const { data } = await axios.get(`${COMMENTS_SERVICE}/${postId}/comments`);
      setComments(data);
    } catch (error) {
      setComments([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fechCommentsData();
  }, []);

  return (
    <div>
      <small>{comments?.length} comments</small>
      <ul>
        {Object.values(comments).map((comment) => {
          return <li key={comment.id}>{comment.content}</li>;
        })}
      </ul>
    </div>
  );
}
