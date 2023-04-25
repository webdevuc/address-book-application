import { render, fireEvent } from "@testing-library/react";

describe("renderMobileMenu", () => {
  let handleCloseMenu;
  let anchorEl;
  let openMenu;

  beforeEach(() => {
    handleCloseMenu = jest.fn();
    anchorEl = null;
    openMenu = false;
  });

  it("renders a closed menu", () => {
    const { getByRole, queryByText } = render(renderMobileMenu);

    expect(getByRole("button")).toBeInTheDocument();
    expect(queryByText("ASC")).not.toBeInTheDocument();
    expect(queryByText("DESC")).not.toBeInTheDocument();
  });

  it("renders an open menu", () => {
    openMenu = true;
    const { getByRole, getByText } = render(renderMobileMenu);

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("asc")).toBeInTheDocument();
    expect(getByText("desc")).toBeInTheDocument();
  });
});
