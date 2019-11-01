import React from "react";
import { storiesOf } from "@storybook/react";

import PageTemplate from "./PageTemplate";

storiesOf("PageTemplate", module).add("default", () => (
  <PageTemplate>Children...</PageTemplate>
));
