export const filterResult = (rows, searchQuery, sortData) => {
  return rows
    ?.filter((row) => {
      if (searchQuery === "") {
        return row;
      } else {
        return (
          row.City?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          row.CompanyName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          row.ContactName?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          row.ContactTitle?.toLowerCase().includes(
            searchQuery?.toLowerCase()
          ) ||
          row.Country?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          row.CustomerID?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          row.Email?.toLowerCase().includes(searchQuery?.toLowerCase())
        );
      }
    })
    .sort((a, b) => {
      if (sortData === "ASC") {
        return a.CustomerID?.localeCompare(b.CustomerID);
      } else {
        return b.CustomerID?.localeCompare(a.CustomerID);
      }
    });
};
