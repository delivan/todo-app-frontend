import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PageTemplate from './PageTemplate';

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
  act(() => {
    render(<PageTemplate>test</PageTemplate>, container);
  });
  expect(container.querySelector('.content').textContent).toBe('test');
});