import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("node environment is test", () => {
  expect(process.env.NODE_ENV).toEqual("test");
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
