import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardList = ({ item }) => {
  const {
    CustomerID,
    CompanyName,
    ContactName,
    ContactTitle,
    Address,
    City,
    Email,
    PostalCode,
    Country,
    Phone,
    Fax,
  } = item;

  return (
    <Card sx={{ width: 320, boxShadow: 0 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          CustomerID : {CustomerID}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          CompanyName : {CompanyName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          ContactName : {ContactName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          ContactTitle : {ContactTitle}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Address : {Address}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          City : {City}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Email : {Email}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          PostalCode : {PostalCode}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Country : {Country}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Phone : {Phone}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Fax : {Fax ? Fax : "-----"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardList;
