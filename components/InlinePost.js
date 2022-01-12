import Link from "next/link";
import Container from "./Container";

function InlinePost({ title, content, author, timestamp, id }) {
  return (
    <Container>
      <Link href={`/posts/${id}`}>
        <a>
          <h3 className="text-2xl hover:underline">{title}</h3>
          <p className="text-nord9 self-end hover:no-underline">{timestamp}</p>
          <h5 className="text-nord7 mb-2">By {author}</h5>
          <p className="text-nord6">{content.slice(0, 100) + "..."}</p>
        </a>
      </Link>
    </Container>
  );
}

export default InlinePost;
