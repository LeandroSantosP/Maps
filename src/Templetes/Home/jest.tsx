import { render, screen } from "@testing-library/react";

import HomeTemplate from "./index";

describe("<Home />", () => {
  it("should render the heading", () => {
    const { container } = render(<HomeTemplate />);

    expect(screen.getByRole("heading", { name: /Home/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
