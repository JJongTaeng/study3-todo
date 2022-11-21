import React from 'react';
import moment from "moment";

const TodoItem = ({ data, setTodoDataList, index }) => {
  return (
    <li className="todo-item">
      <div className="todo-item-description">
        <input defaultChecked={data.completed} type="checkbox" onChange={(e) => {
          if(e.target.checked) {
            setTodoDataList((prev) => {
              let newState = [...prev];
              newState[index].completed = true;
              newState[index].date = moment().format('YYYY/MM/DD');
              return newState;
            });
          } else {
            setTodoDataList((prev) => {
              let newState = [...prev];
              newState[index].completed = false;
              newState[index].date = '';
              return newState;
            });
          }
        }}/>
        <span className={data?.completed ? 'success-text' : ''}>{data?.description}</span>
      </div>
      <div className="todo-item-success-date">{data?.date}</div>
    </li>
  );
};

export default TodoItem;