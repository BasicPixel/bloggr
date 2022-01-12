import Head from "next/head";
import Link from "next/link";
import Container from "../../components/Container";

const Post = ({ post }) => {
  const showdown = require("showdown");
  const converter = new showdown.Converter({
    tables: true,
    tasklists: true,
    emoji: true,
    strikethrough: true,
    customizedHeaderId: true,
  });

  const convertToHtml = () => {
    const html = converter.makeHtml(post.content);

    return { __html: html };
  };

  return (
    <div>
      <Head>
        <title>{post.title} - bloggr</title>
      </Head>

      <Container>
        <p className="text-nord8 mb-2 text-lg">
          {post.author === "" ? "Anonymous" : post.author}
        </p>
        <h1 className="mb-6 border-b-4 border-nord10 pb-4">{post.title}</h1>
        <div className="markdown" dangerouslySetInnerHTML={convertToHtml()}>
          {/* {post.content} */}
        </div>
      </Container>
      <Link href={"/"}>
        <a className="link text-lg">Back to all posts</a>
      </Link>
    </div>
  );
};

export default Post;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://bloggr-django.herokuapp.com/api/post/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};
