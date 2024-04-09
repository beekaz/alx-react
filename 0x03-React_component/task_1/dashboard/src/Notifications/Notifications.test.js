import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

test('Notifications component renders without crashing', () => {
  render(<Notifications />)
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})

test("Notifications renders ul", () => {
  render(<Notifications />)
  expect(screen.getByRole('list')).toBeDefined();
});

test("Notifications renders three list items", () => {
  render(<Notifications />)
  expect(screen.getAllByRole('listitem').length).toBe(3);
});