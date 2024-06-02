// The @tanstack/react-query library is an implementation of React Query, 
// a popular library for managing server state and caching in React applications. 
// It provides hooks like useQuery and useMutation to fetch and manipulate data from APIs, 
// along with features like caching, automatic retries, and data synchronization.

// npm i @tanstack/react-query

import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a new query client instance
const queryClient = new QueryClient();

// Fetch function for data retrieval
const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// App Component
const App = () => {
  const { data, isLoading, isError } = useQuery('data', fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h1>React Query Example</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

// Render the App component within the QueryClientProvider
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools /> {/* Optional: Devtools for React Query */}
  </QueryClientProvider>,
  document.getElementById('root')
);
