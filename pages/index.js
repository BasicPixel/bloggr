import InlinePost from "../components/InlinePost";

import isEmpty from "../utils/isEmpty";

export default function Home({ posts }) {
  return (
    <>
      <h1>All Posts</h1>
      {!isEmpty(posts) ? (
        posts.map((post) => (
          <InlinePost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={"Anonymous"}
            timestamp={post.timestamp}
          />
        ))
      ) : (
        <h3 className="text-2xl text-nord11 text-center">
          Error: could not fetch data
        </h3>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/posts");

  // const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
