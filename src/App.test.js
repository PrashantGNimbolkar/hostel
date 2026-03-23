import { render, screen } from "@testing-library/react";
import App from "./App";
// hi prashnti
test("element link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
