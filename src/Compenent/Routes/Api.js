import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './api.css';

function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="Appi container mt-5 ">
      <h1 className="text-center mb-4">Paginated Todo List</h1>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button className="buttonap"onClick={handlePreviousPage}>Précédent</button>
      <button className="buttonap" onClick={handleNextPage}>Suivant</button>
    </div>
  );
}

export default Api;
