import React, { useEffect, useState } from "react";

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

//Constants
import { REQUEST_OPTIONS } from "../../constants/";

//Utils
import { setUpUrl } from "../../utils/dataUtils";

const RatesTable = () => {
  const [usdToUah, setUsdToUah] = useState(0);
  const [eurToUah, setEurToUah] = useState(0);
  const [btcToUsd, setBtcToUsd] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlUsdToUah = setUpUrl("UAH", "USD");
    const urlEurToUah = setUpUrl("UAH", "EUR");
    const urlBtcToUsd = setUpUrl("USD", "BTC");

    fetch(urlUsdToUah, REQUEST_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setUsdToUah(data.result.toFixed(2));
      })
      .catch((error) => setError(error.message));

    fetch(urlEurToUah, REQUEST_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setEurToUah(data.result.toFixed(2));
      })
      .catch((error) => setError(error.message));

    fetch(urlBtcToUsd, REQUEST_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setBtcToUsd(data.result.toFixed(2));
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

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
          <TableRow>
            <TableCell component="th" scope="row">
              USD/UAH
            </TableCell>
            <TableCell>{usdToUah}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              EUR/UAH
            </TableCell>
            <TableCell>{eurToUah}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              BTC/USD
            </TableCell>
            <TableCell>{btcToUsd}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatesTable;
