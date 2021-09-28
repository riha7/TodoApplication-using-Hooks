import React from 'react';
import './style.css';
import TodoApp from './TodoApp';
export default function App() {
  return (
    <div>
      <center>
        <div
          className="card"
          style={{ height: '90vh', border: '2px solid', overflow: 'auto' }}
        >
          <div className="card-body">
            <h1></h1>
            <TodoApp />
          </div>
        </div>
      </center>
    </div>
  );
}
