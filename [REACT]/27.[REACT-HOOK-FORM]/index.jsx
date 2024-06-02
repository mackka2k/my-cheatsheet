// React Hook Form is a lightweight library for building forms in React. 
// It emphasizes simplicity, performance, and developer experience. 
// With React Hook Form, you can easily manage form state, validate input, and handle 
// form submissions using React hooks. It provides a simple API and seamless integration 
// with React components.

// npm install react-hook-form

import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

// App Component
const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>React Hook Form Example</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Please enter a valid email</span>}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
