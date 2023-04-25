export const columns = [
  { id: "companyName", label: "CompanyName", width: 10 },
  { id: "customerID", label: "CustomerID", minWidth: 20 },
  {
    id: "contactName",
    label: "ContactName",
    minWidth: 50,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 50,
  },
  {
    id: "address",
    label: "Address",
    minWidth: 50,
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 50,
  },
  {
    id: "postalCode",
    label: "PostalCode",
    minWidth: 50,
  },
  {
    id: "country",
    label: "Country",
    minWidth: 60,
  },
  {
    id: "contactTitle",
    label: "ContactTitle",
    minWidth: 60,
  },

  {
    id: "address",
    label: "Address",
    minWidth: 60,
  },
  {
    id: "fax",
    label: "Fax",
    minWidth: 60,
    format: (value) => value.toFixed(2),
  },
];
