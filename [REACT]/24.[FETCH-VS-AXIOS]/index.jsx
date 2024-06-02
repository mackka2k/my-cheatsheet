// Axios is a popular JavaScript library used for making HTTP requests from the browser and Node.js. 
// It provides a simple and easy-to-use API for sending asynchronous requests to RESTful APIs 
// or other web services. Axios supports features like request and response interception, 
// automatic JSON parsing, and promise-based asynchronous syntax. 
// It's widely used in frontend and backend development for handling data fetching and communication 
// with servers.

// npm install axios


import axios from 'axios'; // Import Axios for making HTTP requests
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);

  useEffect(() => {
    // Effect hook to fetch data when the component mounts
    // Using Fetch
    // fetch('https://api.example.com/data')
    //   .then(response => response.json()) // Parse the JSON response
    //   .then(data => setData(data)) // Update state with the fetched data

    // Using Axios
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data)); // Update state with data from the response
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount

  return (
    <div>
      {/* Conditional rendering of fetched data */}
      {data && (
        <div>
          {/* Render your data here */}
        </div>
      )}
    </div>
  );
};

export default MyComponent;

