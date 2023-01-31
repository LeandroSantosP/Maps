import { render, screen } from "@testing-library/react";

import { LinkWarper } from "./index";

describe("<LinkWapper />", () => {
  it("should render Link and Children", () => {
    render(<LinkWarper href="/my-link">AnyThing</LinkWarper>);

    const children = screen.getByRole("link", { name: /anything/i });

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute("href", "/my-link");

    screen.logTestingPlaygroundURL();
  });
});
