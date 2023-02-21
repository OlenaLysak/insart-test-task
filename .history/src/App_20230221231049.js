import React from "react";

//Style
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>Exchange Rate</header>
      <div className={styles.appContent}>This is content</div>
      <footer className={styles.appFooter}>2020 all rights reserved</footer>
    </div>
  );
}

export default App;
