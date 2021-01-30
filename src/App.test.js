import { render } from "@testing-library/react";
import App from "./App";

test("renders react link", () => {
  const { getByText } = render(<App />);

  getByText("Home");
});