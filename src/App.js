import React from "react";

//Style
import styles from "./App.module.css";

//Components
import RatesTable from "./Components/RatesTable";
import Converter from "./Components/Converter";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>Exchange Rate</header>
      <div className={styles.appContent}>
        <RatesTable />
        <Converter />
      </div>
      <footer className={styles.appFooter}>2020 all rights reserved</footer>
    </div>
  );
}

export default App;
