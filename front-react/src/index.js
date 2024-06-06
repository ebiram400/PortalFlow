import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


let users = [
  { name: 'moein', age: 20, gen: "mel" },
  { name: 'sadaf', age: 21, gen: "famel" },
  { age: 22, gen: "famel" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {users.map((user)=> <App {...user} />)}
  </>
);