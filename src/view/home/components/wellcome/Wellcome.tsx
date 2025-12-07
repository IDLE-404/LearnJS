import React from "react";
import styles from "./style/Styles.module.css";
import { Sparkles, ArrowRight } from "lucide-react";
import Cards from "../cards/Cards";
import Start from "../start/Start";
const Wellcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Sparkles />
        <span className={styles.bannerText}>
          Современная платформа обучения
        </span>
      </div>
      <div className={styles.wellcomeBox}>
        <span className={styles.title}>
          <span className={styles.titleGradient}>LearnJS</span> <br /> тренажёр
          по JavaScript
        </span>
        <p className={styles.text}>
          Прокачай навыки алгоритмов, массивов, DOM и логики через практические
          задачи
        </p>
      </div>
      <div className={styles.boxBtn}>
        <button className={styles.activeBtn}>
          Начать обучение <ArrowRight />
        </button>
        <button className={styles.btn}>Обзор тем</button>
      </div>

      <div className={styles.container}>
        <Cards />
        <Start />
      </div>
    </div>
  );
};

export default Wellcome;
