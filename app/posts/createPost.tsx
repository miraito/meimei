"use client";
import { createPost } from "./posts";

export const Button = () => {
  return (
    <button
      onClick={() => {
        createPost("madomagi");
      }}
    >
      create post
    </button>
  );
};
