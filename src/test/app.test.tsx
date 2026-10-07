import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "@/App";

describe("App", () => {
  it("renders the Vittahii landing page", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /rooted in pure richness/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /made with care/i })).toBeInTheDocument();
  });
});
