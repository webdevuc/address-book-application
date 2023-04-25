// import React from "react";
// import { render, screen } from "@testing-library/react";
// import TableView from "../components/TableView";
// import { TableBody, TableRow, TableCell, TablePagination } from "@mui/material";

// describe("TableView", () => {
//   it("renders table with data", () => {
//     const searchQuery = "";
//     const { getByText } = render(<TableView searchQuery={searchQuery} />);

//     expect(getByText("CompanyName")).toBeInTheDocument();
//     expect(getByText("CustomerID")).toBeInTheDocument();
//     expect(getByText("ContactName")).toBeInTheDocument();
//     expect(getByText("Email")).toBeInTheDocument();
//     expect(getByText("Phone")).toBeInTheDocument();
//     expect(getByText("PostalCode")).toBeInTheDocument();
//     expect(getByText("Country")).toBeInTheDocument();
//     expect(getByText("ContactTitle")).toBeInTheDocument();
//     expect(getByText("Fax")).toBeInTheDocument();
//   });

//   it('renders "No data" message when there is no data', () => {
//     const { getByRole } = render(
//       <TableBody>
//         <TableRow>
//           <TableCell align={"center"}>No data</TableCell>
//         </TableRow>
//       </TableBody>
//     );

//     const cell = getByRole("cell", { name: "No data" });
//     expect(cell).toBeInTheDocument();
//   });

//   it("renders when filteredRows length is greater than 1", () => {
//     const rows = [
//       { id: 1, name: "John" },
//       { id: 2, name: "Jane" },
//     ];
//     const filteredRows = rows.filter((row) => row.id === 1);
//     const handleChangePage = jest.fn();
//     const handleChangeRowsPerPage = jest.fn();
//     const rowsPerPage = 10;
//     const page = 0;

//     render(
//       <TablePagination
//         rowsPerPageOptions={[10, 20, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />,
//       { wrapper: ({ children }) => <div>{children}</div> }
//     );
//   });
// });
