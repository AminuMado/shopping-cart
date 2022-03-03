import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "../Card";

describe("Card", () => {
  test("renders Card component", () => {
    render(<Card />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
