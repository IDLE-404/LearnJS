import React from "react";
import styles from "./style/Styles.module.css";
import { Sparkles, Zap, Target } from "lucide-react";

const cardItem = [
  {
    name: "Практика",
    icon: Sparkles,
    text: "Решай реальные задачи и применяй знания на практике с мгновенной проверкой кода",
  },
  {
    name: "Прогресс",
    icon: Zap,
    text: "Отслеживай свои достижения, статистику и прогресс по каждой теме в реальном времени",
  },
  {
    name: "Уровни",
    icon: Target,
    text: "От простых к сложным — задачи для любого уровня подготовки от новичка до эксперта",
  },
];

const Cards = () => {
  return (
    <div className={styles.cardsWrapper}>
      {cardItem.map((item, key) => {
        const Icon = item.icon;
        return (
          <div className={styles.container} key={key}>
            <div className={styles.boxLogo}>
              <div className={styles.logo}>
                <Icon size={36}/>
              </div>
            </div>
            <div className={styles.boxInfo}>
              <span className={styles.title}>{item.name}</span>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
