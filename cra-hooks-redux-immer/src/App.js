import React from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <PageTemplate>
      <TodoInput/>
      <TodoList/>
    </PageTemplate>
  );
}