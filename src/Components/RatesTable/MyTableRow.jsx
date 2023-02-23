import React, { useState, useEffect } from "react";

//Components
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

//Utils
import { setUpUrl } from "../../utils/dataUtils";

//Constants
import { REQUEST_OPTIONS } from "../../constants";

const MyTableRow = ({ label }) => {
  const [rate, setRate] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const currencies = label.split("/").reverse();
    const url = setUpUrl(...currencies);

    fetch(url, REQUEST_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setRate(data.result.toFixed(2));
      })
      .catch((error) => setError(error.message));
  }, [label]);

  if (error) return <h1>{error}</h1>;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {label}
      </TableCell>
      <TableCell>{rate}</TableCell>
    </TableRow>
  );
};

export default MyTableRow;
