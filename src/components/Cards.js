import Box from "@mui/material/Box";
import addressData from "../seed/data.json";
import CardList from "./CardList";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
const Cards = () => {
  const isOpen = useSelector((state) => state.isOpen.isOpen);
  const serachQuery = useSelector((state) => state.search.search);
  const sortData = useSelector((state) => state.filter.filterText);
  const results = addressData.AddressBook.Contact.filter((post) => {
    if (serachQuery === "") {
      return post;
    } else if (
      post.City?.toLowerCase().includes(serachQuery?.toLowerCase()) ||
      post.CompanyName?.toLowerCase().includes(serachQuery?.toLowerCase()) ||
      post.ContactName?.toLowerCase().includes(serachQuery?.toLowerCase()) ||
      post.ContactTitle?.toLowerCase().includes(serachQuery?.toLowerCase()) ||
      post.Country?.toLowerCase().includes(serachQuery?.toLowerCase()) ||
      post.CustomerID?.toLowerCase().includes(serachQuery?.toLowerCase()) ||
      post.Email?.toLowerCase().includes(serachQuery?.toLowerCase())
    ) {
      return post;
    }
  });

  const sortedResults = useMemo(() => {
    if (sortData === "ASC") {
      return [...results].sort((a, b) =>
        a.CompanyName.localeCompare(b.CompanyName)
      );
    } else {
      return [...results].sort((a, b) =>
        b.CompanyName.localeCompare(a.CompanyName)
      );
    }
  }, [sortData, results]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2.5,
        position: "relative",
        marginLeft: isOpen ? "260px" : "6.5rem",
        marginTop: 10,
        background: "#E7EBF0",
        boxShadow: 0,
        pl: 5,
        pr: 0,
        pt: 1.5,
      }}
    >
      {sortedResults.length ? (
        sortedResults.map((item, index) => (
          <CardList key={index} item={item} serachQuery={serachQuery} />
        ))
      ) : (
        <Typography
          variant="h4"
          sx={{
            marginTop: "5rem",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Data
        </Typography>
      )}
    </Box>
  );
};

export default Cards;
