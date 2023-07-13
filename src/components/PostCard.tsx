import { PostProps } from "../types/types";

const PostCard = ({ title, body }: PostProps) => {
  return (
    <li className="postCist">
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  );
};

export default PostCard;
