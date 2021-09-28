import React from 'react';
const TodoList = ({ listing, deleteHandler }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body"></div>
        {listing.map((list, index) => {
          return (
            <div key={index} className="card">
              <div className="card-body">
                <h2>
                  {list} &nbsp;
                  <button onClick={() => deleteHandler(index)}>X</button>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
