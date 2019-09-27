import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ReactTestUtils, { act } from "react-dom/test-utils";
import TodoInput from './TodoInput';
import ShallowRenderer from 'react-test-renderer/shallow';

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

const shallowRenderer = new ShallowRenderer();

it('shallow rendering', () => {
  const insertTodo = jest.fn();
  const defaultTodoId = 0;

  act(() => {
    shallowRenderer.render(
      <TodoInput 
        insertTodo={insertTodo}
        defaultTodoId={defaultTodoId}
      />
    );
  });

  const output = shallowRenderer.getRenderOutput();

  expect(output.type).toBe('div');
  expect(output.props.className).toBe('todo-input');
});

it('renders with children', () => {
  const insertTodo = jest.fn();
  const defaultTodoId = 0;

  act(() => {
    render(      
      <TodoInput 
        insertTodo={insertTodo}
        defaultTodoId={defaultTodoId}
      />, 
      container
    );
  });

  const input = container.querySelector('.todo-input > input');
  act(() => {
    // const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    // nativeInputValueSetter.call(input, 'test');
    // input.dispatchEvent(new Event('input', {bubbles: true}));
    input.value = 'test';
    ReactTestUtils.Simulate.change(input)
  });
  expect(input.value).toBe('test');

  const addButton = container.querySelector('.add-button');
  act(() => {
    // addButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    ReactTestUtils.Simulate.click(addButton)
  });
  expect(insertTodo).toHaveBeenCalledTimes(1);
});