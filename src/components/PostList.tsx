import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { PostProps } from "../types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostList = () => {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const jsonData: PostProps[] = (await getData()) as PostProps[];

        console.log(jsonData);

        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }

    void fetchData();
  }, []);

  return (
    <ul className="postList">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default PostList;
