import React from "react";
import { render, screen } from "@testing-library/react";

import Landing from "../Landing";

describe("Landing", () => {
  test("renders Landing component", () => {
    render(<Landing />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
