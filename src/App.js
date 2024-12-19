// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetching all todos from the JSONPlaceholder API
        axios
            .get('https://jsonplaceholder.typicode.com/todos')  // Fetch all todos
            .then((response) => {
                setTodos(response.data);  // Store the fetched todos in state
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch((error) => {
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);  // Empty array means this effect runs only once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="App">
            <h1>Todo List from JSONPlaceholder</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;