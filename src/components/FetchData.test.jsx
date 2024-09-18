import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FetchData } from "./FetchData.jsx";

describe("First test", () => {
  it("first test renders h2", () => {
    render(<FetchData />);
    expect(screen.getByRole("heading").textContent).toMatch(/My First test/);
  });
});
