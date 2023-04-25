import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import addressData from "../seed/data.json";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { columns } from "./Data/columns";
import { useState } from "react";

let rows = [];
addressData &&
  addressData.AddressBook.Contact.forEach((item, index) => {
    rows.push({
      customerID: item.CustomerID,
      companyName: item.CompanyName,
      contactName: item.ContactName,
      contactTitle: item.ContactTitle,
      address: item.Address,
      email: item.Email,
      postalCode: item.PostalCode,
      country: item.Country,
      phone: item.Phone,
      fax: item.Fax,
    });
  });

export default function TableView() {
  const isOpen = useSelector((state) => state.isOpen.isOpen);
  const searchQuery = useSelector((state) => state.search.search);
  const sortData = useSelector((state) => state.filter.filterText);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows
    .filter((row) => {
      if (searchQuery === "") {
        return true;
      } else {
        return (
          row.customerID?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.customerID?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.country?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.companyName?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    })
    .sort((a, b) => {
      if (sortData === "ASC") {
        return a.customerID.localeCompare(b.customerID);
      } else {
        return b.customerID.localeCompare(a.customerID);
      }
    });

  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: isOpen ? "205px" : "30px",
        marginTop: "2rem",
      }}
    >
      <Box component="main" sx={{ flexGrow: 1, pl: 7, pr: 3, pt: 7 }}>
        <Paper sx={{ flexGrow: 1, p: 3, boxShadow: 0 }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.length ? (
                  filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                ) : (
                  <TableBody>
                    <TableRow>
                      <TableCell align={"center"}>No data</TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {filteredRows.length > 1 && (
            <TablePagination
              rowsPerPageOptions={[10, 20, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      </Box>
    </Box>
  );
}
