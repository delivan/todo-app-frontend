import React, { useReducer } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import todosReducer, { initialTodos } from './modules/todos'; 

export default function App() {
  const [todos, todosDispatch] = useReducer(todosReducer, initialTodos);
  
  return (
    <PageTemplate>
      <TodoInput todosDispatch={todosDispatch}/>
      <TodoList todos={todos} todosDispatch={todosDispatch}/>
    </PageTemplate>
  );
}