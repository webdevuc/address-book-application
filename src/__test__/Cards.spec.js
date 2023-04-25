import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Cards from "../components/Cards";

const mockStore = configureStore([]);

describe("Cards component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      isOpen: { isOpen: false },
      search: { search: "" },
      filter: { filterText: "" },
    });
  });

  it("should render the component without errors", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cards data-testid="cards-component" />
      </Provider>
    );
    expect(getByTestId("cards-component")).toBeInTheDocument();
  });

  it('displays "No Data" message when there is no search result', () => {
    render(<Cards />);

    expect(screen.getByText(/No Data/i)).toBeInTheDocument();
  });

  it("displays search result when there is a match", () => {
    const mockState = {
      isOpen: true,
      search: "John",
      filterText: "DESC",
    };

    jest.mock("react-redux", () => ({
      useSelector: jest
        .fn()
        .mockImplementation((selector) => selector(mockState)),
    }));

    const mockData = {
      AddressBook: {
        Contact: [
          {
            ContactName: "John Smith",
            CompanyName: "ACME Corp",
            Email: "john.smith@acme.com",
            Country: "USA",
            City: "New York",
            CustomerID: "12345",
            ContactTitle: "CEO",
          },
        ],
      },
    };

    jest.mock("../seed/data.json", () => mockData);

    render(<Cards />);

    expect(screen.getByText(/John Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/ACME Corp/i)).toBeInTheDocument();
    expect(screen.getByText(/john\.smith@acme\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/USA/i)).toBeInTheDocument();
    expect(screen.getByText(/New York/i)).toBeInTheDocument();
    expect(screen.getByText(/12345/i)).toBeInTheDocument();
    expect(screen.getByText(/CEO/i)).toBeInTheDocument();
  });

  it("displays sorted search result when filter is changed", () => {
    // Set up a mock store with search results and filter
    const mockState = {
      isOpen: true,
      search: "John",
      filterText: "ASC",
    };

    jest.mock("react-redux", () => ({
      useSelector: jest
        .fn()
        .mockImplementation((selector) => selector(mockState)),
    }));

    const mockData = {
      AddressBook: {
        Contact: [
          {
            ContactName: "John Smith",
            CompanyName: "ACME Corp",
            Email: "john.smith@acme.com",
            Country: "USA",
            City: "New York",
            CustomerID: "12345",
            ContactTitle: "CEO",
          },
          {
            ContactName: "John Doe",
            CompanyName: "XYZ Inc",
            Email: "john.doe@xyz.com",
            Country: "Canada",
            City: "Toronto",
            CustomerID: "67890",
            ContactTitle: "CTO",
          },
        ],
      },
    };

    jest.mock("../seed/data.json", () => mockData);

    render(<Cards />);

    // Check the initial order
    const items = screen.getAllByRole("article");
    expect(items[0]).toHaveTextContent(/ACME Corp/i);
    expect(items[1]).toHaveTextContent(/XYZ Inc/i);

    // Change the filter to DESC
    mockState.filterText = "DESC";
    render(<Cards />);

    // Check the updated order
    const updatedItems = screen.getAllByRole("article");
    expect(updatedItems[0]).toHaveTextContent(/XYZ Inc/i);
    expect(updatedItems[1]).toHaveTextContent(/ACME Corp/i);
  });
});
