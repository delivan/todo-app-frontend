import React from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos'; 

export default function App() {
  const {todos, defaultTodoId, insertTodo, toggleTodo, removeTodo} = useTodos();
  
  return (
    <PageTemplate>
      <TodoInput insertTodo={insertTodo} defaultTodoId={defaultTodoId}/>
      <TodoList 
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </PageTemplate>
  );
}