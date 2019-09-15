import React from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInputContainer from './containers/TodoInput';
import TodoListContainer from './containers/TodoList';

export default function App() {
  return (
    <PageTemplate>
      <TodoInputContainer/>
      <TodoListContainer/>
    </PageTemplate>
  );
}