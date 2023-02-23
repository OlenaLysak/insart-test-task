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
import MyTableRow from "./MyTableRow";

const RatesTable = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: "50px", maxWidth: 700 }}>
      <Table aria-label="simple table" className={styles.verticalDivider}>
        <TableHead>
          <TableRow>
            <TableCell>Currency/Current Date</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <MyTableRow label="USD/UAH" />
          <MyTableRow label="EUR/UAH" />
          <MyTableRow label="BTC/USD" />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatesTable;
