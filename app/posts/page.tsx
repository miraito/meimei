import { Button } from "./createPost";
import { getPosts } from "./posts";

export default async function Page() {
  const list = await getPosts();
  return (
    <div>
      <p>meimei</p>
      <Button />
      {list.map((a) => {
        return <div key={a.title}>{a.title}</div>;
      })}
    </div>
  );
}
