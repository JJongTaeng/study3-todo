import React, { useEffect, useState } from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({ title }) => {
  const [todoDataList, setTodoDataList] = useState(JSON.parse(localStorage.getItem('todo')) || [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoDataList));
  }, [todoDataList])

  return (
    <div id="container">
      <h1>{title}</h1>
      <div className="todo-container">
        <div className="todo-wrapper">
          <div className="todo-header">
            <div className="todo-header-description">설명</div>
            <div className="todo-header-success-date">완료 날짜</div>
          </div>
          <div className="todo-contents">
            <ul className="todo-list">
              {
                todoDataList.map((todoData, index) => <TodoItem
                  key={index}
                  data={todoData}
                  index={index}
                  setTodoDataList={setTodoDataList}
                />)
              }
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let newState = [ ...todoDataList ];
              newState.push({
                description: e.target.description.value,
                date: '',
                completed: false
              })
              setTodoDataList(newState);
              e.target.description.value = '';
            }}
            className="todo-footer"
          >
            <input name="description" type="text" className="todo-inputbox"/>
            <button type="submit" className="todo-submit-button">입력</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoList;