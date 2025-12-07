import React from "react";
import styles from "./style/Styles.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.text}>LearnJS 2025 — Тренажёр по JavaScript</span>
      </div>
      <div className={styles.info}>
        <span className={styles.text}>О проекте</span>
        <span className={styles.text}>Контакты</span>
        <span className={styles.text}>GitHub</span>
      </div>
    </div>
  );
};

export default Footer;
