import Container from "../components/Container";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Container>
        <div className="text-xl">
          <p className="mb-4">
            bloggr is a blog where anyone can post anonymously without signing
            up. Made with simplicity and power in mind, bloggr supports markdown
            format.
          </p>

          <p className="mb-4">
            bloggr was created using Next.js, Tailwind CSS,{" "}
            <a
              href="https://www.nordtheme.com/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Nord color pallete
            </a>{" "}
            on the frontend, Django Rest Framework on the backend.
          </p>

          <p className="mb-4">
            Made by{" "}
            <a
              href="https://github.com/BasicPixel"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              BasicPixel
            </a>{" "}
            as a hobby project.
          </p>

          <ul className="mb-4 list-disc list-inside">
            <li>
              <a
                href="https://github.com/BasicPixel/bloggr-api"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                API Documentation
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BasicPixel/bloggr"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
