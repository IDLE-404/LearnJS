import React from "react";
import styles from "./style/Styles.module.css";
import CardProgress from "./components/cardProgress/CardProgress";
const Progress = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.boxTitle}>
            <span>Твой прогресс</span>
            <p>Отслеживай достижения и статистику обучения</p>
        </div>
        <div className={styles.cardProgress}>
            <CardProgress />
        </div>
      </div>
    </div>
  );
};

export default Progress;
