import React from "react";
import { render, screen } from "@testing-library/react";

import Navbar from "../Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
