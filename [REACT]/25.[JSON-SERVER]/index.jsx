// JSON Server is a tool for quickly creating a mock REST API server using a JSON file. 
// It's ideal for frontend development, enabling rapid prototyping and 
// testing without a full backend setup.

// npm install -g json-server

// Now, let's create a JSON file named data.json with some sample data:

{
  "posts" [
    { "id": 1, "title": "Post 1", "content": "Content of post 1" },
    { "id": 2, "title": "Post 2", "content": "Content of post 2" },
    { "id": 3, "title": "Post 3", "content": "Content of post 3" }
  ]
}

// json-server --watch data.json --port 4200


// fetch data from this API using Axios:
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
