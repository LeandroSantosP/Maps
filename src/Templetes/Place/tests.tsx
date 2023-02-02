import { render, screen } from "@testing-library/react";

import { PlaceTemplate } from "./index";

describe("<Place />", () => {
  it("uses correctly image prop", () => {
    const place = {
      slug: "veneza-italia",
      description: "uma descrisao",
      name: "test",
      gallery: [
        {
          width: 1920,
          height: 1080,
          alt: "paisagem",
          url: "http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F93162%2F1675195167-veneza.jpg&w=1920&q=75"
        }
      ]
    };

    render(<PlaceTemplate place={place} />);

    const image = screen.getByAltText("paisagem");

    expect(image).toHaveAttribute(
      "src",
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F93162%2F1675195167-veneza.jpg&w=1920&q=75"
    );
  });
});
