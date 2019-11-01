import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import TodoItem from "./TodoItem";

export const actions = {
  toggle: action("toggle"),
  remove: action("remove")
};

storiesOf("TodoItem", module)
  .add("default", () => (
    <TodoItem id={1} done={false} {...actions}>
      Test
    </TodoItem>
  ))
  .add("toggled", () => (
    <TodoItem id={1} done={true} {...actions}>
      Test
    </TodoItem>
  ));
