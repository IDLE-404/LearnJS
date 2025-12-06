import React from "react";
import styles from "./style/Styles.module.css";
import Wellcome from "./components/wellcome/Wellcome";
const Home = () => {
  return (
    <div className={styles.container}>
      <Wellcome />
    </div>
  );
};

export default Home;
