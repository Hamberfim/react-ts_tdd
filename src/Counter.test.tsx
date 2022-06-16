import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

test("should render a label and counter", () => {
  const handler = jest.fn();
  const { getByTitle } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
  const label = screen.getByTitle("Count Label");
  expect(label).toBeInTheDocument();
  const count = screen.getByTitle("Current Count");
  expect(count).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
  const handler = jest.fn();
  const { getByTitle } = render(
    <Counter label={`Current`} count={0} onCounterIncrease={handler} />
  );
  const label = screen.getByTitle("Current Count");
  expect(label).toBeInTheDocument();
});

test("should call the incrementer function", () => {
  const handler = jest.fn();
  const { getByTitle } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
  const counter = screen.getByTitle("Current Count");
  fireEvent.click(counter);
  expect(handler).toBeCalledWith(false);
});
