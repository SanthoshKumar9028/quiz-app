import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRedux } from "./utils/render-with-redux";

test("renders learn react link", async () => {
  renderWithRedux(<App />);
  const linkElement = await screen.findByText(/quiz app/i);
  expect(linkElement).toBeInTheDocument();
});
