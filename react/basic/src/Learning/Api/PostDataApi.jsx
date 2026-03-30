import React, { useState } from "react";

function PostDataApi() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body, userId: 1 }),
        },
      );

      const data = await response.json();
      setResponseMessage(`Post created successfully! ID: ${data.id}`);
      setTitle("");
      setBody("");
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Posting data to verify post call</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            className="border-2"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            className="border-2"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Submit Post</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default PostDataApi;
