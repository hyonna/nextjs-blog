import { render, screen } from "@testing-library/react";
import FirstPost from "../pages/posts/first-post";
import "@testing-library/jest-dom";

describe("FirstPost", () => {
  it("renders a heading", () => {
    render(<FirstPost />);

    const heading = screen.getByRole("heading", {
      name: /First Post/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
