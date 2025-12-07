import React from "react";
import styles from "./style/Styles.module.css";
import { ArrowRight } from "lucide-react";
const Start = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.boxInfo}>
          <span className={styles.title}>Готов начать?</span>
          <p className={styles.text}>
            Присоединяйся к тысячам разработчиков, которые уже прокачивают свои
            навыки
          </p>
        </div>
        <button className={styles.activeBtn}>Выбрать тему <ArrowRight /></button>
      </div>
    </div>
  );
};

export default Start;
