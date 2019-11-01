import React from "react";
import { action } from "@storybook/addon-actions";
import TodoInput from "./TodoInput.jsx";
import { storiesOf } from "@storybook/react";

export const actions = {
  insertTodo: action("insertTodo")
};

storiesOf("TodoInput", module).add("default", () => (
  <TodoInput defaultTodoId={0} {...actions} />
));
