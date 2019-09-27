import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ReactTestUtils, { act } from "react-dom/test-utils";
import TodoItem from './TodoItem';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with children', () => {
  const id = 0;
  const done = false;
  const toggle = jest.fn();
  const remove = jest.fn();

  act(() => {
    render(
      <TodoItem
        id={id}
        done={done}
        toggle={toggle}
        remove={remove}
      >
        Test
      </TodoItem>
    , container);
  });

  const todoItem = container.querySelector('.todo-item');
  const deleteButton = container.querySelector('.delete-button');
  const text = container.querySelector('.text');
  const checker = container.querySelector('.checker');

  act(() => {
    ReactTestUtils.Simulate.click(todoItem);
    ReactTestUtils.Simulate.click(deleteButton);
  });
  expect(toggle).toHaveBeenCalledTimes(1);
  expect(remove).toHaveBeenCalledTimes(1);
  expect(text.textContent).toBe('Test');
  expect(checker.checked).toBe(false);
});