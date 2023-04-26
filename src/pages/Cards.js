import Box from "@mui/material/Box";
import CardList from "./CardList";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { filterResult } from "../components/SortFilter";
import { getAddressList } from "../redux/actions/addressAction";
const Cards = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen.isOpen);
  const searchQuery = useSelector((state) => state.search.search);
  const sortData = useSelector((state) => state.filter.filterText);
  const data = useSelector((state) => state?.addressList?.data?.Contact);
  const isLoading = useSelector((state) => state?.addressList.loading);

  let rows = [];
  data &&
    data.forEach((item, index) => {
      rows.push({
        customerID: item.CustomerID,
        companyName: item.CompanyName,
        contactName: item.ContactName,
        contactTitle: item.ContactTitle,
        city: item.City,
        address: item.Address,
        email: item.Email,
        postalCode: item.PostalCode,
        country: item.Country,
        phone: item.Phone,
        fax: item.Fax,
      });
    });

  useEffect(() => {
    dispatch(getAddressList());
  }, [dispatch]);

  const filteredCard = filterResult(data, searchQuery, sortData);

  return (
    <>
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
          pb: 2,
        }}
      >
        {isLoading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="primary" />
          </Box>
        )}
        {filteredCard?.length ? (
          filteredCard.map((item, index) => (
            <CardList key={index} item={item} serachQuery={searchQuery} />
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
    </>
  );
};

export default Cards;
