import React from "react";

//Styling
import styles from "./index.module.css";

//Components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(currency, buy, sell) {
  return { currency, buy, sell };
}

const rows = [
  createData("USD/UAH", 159, 6.0),
  createData("EUR/UAH", 237, 9.0),
  createData("BTC/USD", 262, 16.0),
];

const RatesTable = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: "50px", maxWidth: 700 }}>
      <Table aria-label="simple table" className={styles.verticalDivider}>
        <TableHead>
          <TableRow>
            <TableCell>Currency/Current Date</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.currency}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                  borderRight: 'solid 1px lightgrey'
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.currency}
              </TableCell>
              <TableCell>{row.buy}</TableCell>
              <TableCell>{row.sell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatesTable;
