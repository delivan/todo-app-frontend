import { configure } from "@storybook/react";
import requireContext from "require-context.macro";
import "../src/styles/storybook.scss";

configure(requireContext("../src", true, /\.story\.js$/), module);
