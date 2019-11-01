import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import TodoList from "./TodoList";

export const actions = {
  toggleTodo: action("toggleTodo"),
  removeTodo: action("removeTodo")
};

export const defaultTodos = [
  {
    id: 0,
    text: "React 적용하기",
    done: true
  },
  {
    id: 1,
    text: "Immer.js 적용하기",
    done: true
  },
  {
    id: 2,
    text: "storybook 적용하기",
    done: true
  },
  {
    id: 3,
    text: "Jest, Enzyme 적용하기",
    done: true
  }
];

export const todosWithNotDone = [
  ...defaultTodos.slice(0, defaultTodos.length - 1),
  {
    ...defaultTodos[defaultTodos.length - 1],
    done: false
  }
];

storiesOf("TodoList", module)
  .add("default", () => <TodoList todos={defaultTodos} {...actions} />)
  .add("withNotDone", () => <TodoList todos={todosWithNotDone} {...actions} />);
