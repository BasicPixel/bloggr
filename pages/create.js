import Head from "next/head";
import { useState } from "react";
import Container from "../components/Container";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [fetchState, setFetchState] = useState({
    success: false,
    error: null,
    loading: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFetchState({ ...fetchState, loading: true });
    fetch("https://bloggr-django.herokuapp.com/api/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then(
        // (res) => res.json()
        (res) => {
          console.log(res.json());
          if (res.ok) {
            setFetchState({ ...fetchState, success: true });
            setPostData({
              title: "",
              content: "",
              author: "",
            });
          } else {
            throw new Error("Cannot add post");
          }
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => setFetchState({ ...fetchState, error: err }))
      .finally(() => {
        setFetchState({ ...fetchState, loading: false });
      });
  };

  return (
    <>
      <Head>
        <title>Create Post - bloggr</title>
      </Head>

      <h1>Create Post</h1>

      <Container>
        {fetchState.error && (
          <div className="bg-nord11 text-nord0 p-2 rounded">
            Error: {fetchState.error}
          </div>
        )}
        {fetchState.loading && (
          <div className="bg-nord13 text-nord0 p-2 rounded">Adding post...</div>
        )}
        {!fetchState.loading && fetchState.data && (
          <div className="bg-nord14 text-nord0 p-2 rounded">
            Post added successfully.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="rounded py-2 my-1 bg-nord2 text-nord6 w-full text-3xl focus:outline-none"
            autoFocus
            placeholder="Title"
            dir="auto"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            required
            maxLength={100}
          />

          <input
            type="text"
            id="author"
            className="rounded my-1 bg-nord2 text-nord6 w-full focus:outline-none"
            placeholder="Your name (optional)"
            dir="auto"
            value={postData.author}
            onChange={(e) =>
              setPostData({ ...postData, author: e.target.value })
            }
            maxLength={50}
            autoComplete="off"
          />

          <textarea
            type="text"
            id="content"
            className="rounded py-2 my-1 bg-nord2 text-nord6 text-lg w-full min-h-[50vh] focus:outline-none font-mono"
            placeholder="Write..."
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            dir="auto"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-nord7 text-nord1 rounded py-2 px-4 hover:bg-nord10 hover:text-nord4 hover:transition-all duration-200"
          >
            Post
          </button>
        </form>
      </Container>
    </>
  );
};

export default CreatePost;
