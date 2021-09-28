import React, { useState } from 'react';
import TodoList from './TodoList';
export default function Todo() {
  const [task, settask] = useState('');
  const [todo, settodo] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(task);
    let newTodo = [...todo, task];
    settodo(newTodo);
    console.log(newTodo);
    settask('');
  };
  const deleteHandler = (uniqueValue) => {
    const newTodo = todo.filter((todo, index) => index !== uniqueValue);
    settodo(newTodo);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Todo Management Application</h3>
          <form onSubmit={submitHandler}>
            <input
              size="25"
              type="text"
              name="task"
              value={task}
              onChange={(e) => settask(e.target.value)}
            />
            <button>Add</button>
          </form>
          {/* {todo.map((list, index) => {
            return (
              <div key={index} className="card">
                <div className="card-body">
                  <h2>
                    {list} &nbsp;{' '}
                    <button onClick={() => deleteHandler(index)}>X</button>{' '}
                  </h2>
                </div>
              </div>
            );
          })} */}
          <TodoList listing={todo} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
}
