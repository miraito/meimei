"use server";

import { redisClient } from "@/lib/redis";
type Post = {
  title: string;
};
export const getPosts = async () => {
  console.log("hogehoge");

  const posts = (await redisClient.get("posts")) || "[]";

  return JSON.parse(posts) as Post[];
};

export const createPost = async (title: string) => {
  const posts = await getPosts();
  posts.push({ title: title });

  await redisClient.set("posts", JSON.stringify(posts));
};
