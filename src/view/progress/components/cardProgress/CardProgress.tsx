import {
  Trophy,
  TrendingUp,
  Target,
  Flame,
  CheckCircle2,
  Calendar,
  Award,
  Star,
} from "lucide-react";
import React from "react";
import styles from "./style/Styles.module.css";
const CardProgress = () => {
  const cardItem = [
    { title: "123", icon: Target, number: 12, text: "123123" },
    { title: "", icon: Target, number: 12, text: "" },
    { title: "", icon: Target, number: 12, text: "" },
  ];
  return (
    <div>
      {cardItem.map((item, key) => {
        const Icon = item.icon;
        return (
          <div className={styles.card}>
            <div className={styles.headeCard}>
              <div className={styles.logo}>
                <Icon />
                <span>{item.title}</span>
              </div>
            </div>
            <div className={styles.mainCard}>
                <span className={styles.numbers}>{item.number}</span>
                <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProgress;
