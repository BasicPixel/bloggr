import Link from "next/link";
import Container from "./Container";

function InlinePost({ title, content, author, timestamp, id }) {
  return (
    <Container>
      <Link href={`/posts/${id}`}>
        <a>
          <h2 className="text-2xl hover:underline">{title}</h2>
          <p className="self-end hover:no-underline text-sm">{timestamp}</p>
          <h3 className="mb-2">
            By <span className="opacity-70">{author}</span>
          </h3>
          <p className="text-nord6">{content.slice(0, 100) + "..."}</p>
        </a>
      </Link>
    </Container>
  );
}

export default InlinePost;
