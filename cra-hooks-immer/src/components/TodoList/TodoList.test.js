import React from 'react';
import { act } from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';

import TodoList from './TodoList';

const shallowRenderer = new ShallowRenderer();
it('shallow rendering', () => {
  const todos = [];
  const toggleTodo = jest.fn();
  const removeTodo = jest.fn();
  act(() => {
    shallowRenderer.render(
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    );
  });
  const output = shallowRenderer.getRenderOutput();

  expect(output.type).toBe('div');
});