import { render, screen } from "@testing-library/react";

import { Pages } from "./index";

describe("<Pages />", () => {
  it("should render the heading", () => {
    const { container } = render(<Pages />);

    expect(
      screen.getByRole("heading", { name: /Pages/i }))
      .toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
