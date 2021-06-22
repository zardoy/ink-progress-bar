// after cloning, run with ts-node (to install: npm i -g ts-node@latest)

import React from "react";

import { render } from "ink";

import { InlineProgressBar } from "../src";

render(<InlineProgressBar maxWidth={10} value={0.5} />);