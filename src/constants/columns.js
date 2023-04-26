export const columns = [
  { id: "CompanyName", label: "CompanyName", width: 10 },
  { id: "CustomerID", label: "CustomerID", minWidth: 20 },
  {
    id: "ContactName",
    label: "ContactName",
    minWidth: 50,
  },
  {
    id: "Email",
    label: "Email",
    minWidth: 50,
  },
  {
    id: "Address",
    label: "Address",
    minWidth: 50,
  },
  {
    id: "Phone",
    label: "Phone",
    minWidth: 50,
  },
  {
    id: "PostalCode",
    label: "PostalCode",
    minWidth: 50,
  },
  {
    id: "Country",
    label: "Country",
    minWidth: 60,
  },
  {
    id: "ContactTitle",
    label: "ContactTitle",
    minWidth: 60,
  },

  {
    id: "Fax",
    label: "Fax",
    minWidth: 60,
    format: (value) => value.toFixed(2),
  },
];
