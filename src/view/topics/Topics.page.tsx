import React, { useState } from "react";
import styles from "./style/Styles.module.css";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Box,
  Layers,
  Type,
  Globe,
  Clock4,
  Binary,
  Flame,
} from "lucide-react";
const Topics = () => {
  const cardsItem = [
    {
      icon: Layers,
      title: "Массивы",
      text: "map, filter, reduce и другие методы работы с массивами",
      progress: 12,
      total: 20,
    },
    {
      icon: Type,
      title: "Строки",
      text: "Обработка текста, регулярные выражения, методы строк",
      progress: 8,
      total: 15,
    },
    {
      icon: Globe,
      title: "DOM",
      text: "Работа с элементами страницы, события, манипуляции DOM",
      progress: 5,
      total: 18,
    },
    {
      icon: Clock4,
      title: "Асинхронность",
      text: "Promises, async/await, fetch и обработка асинхронных операций",
      progress: 3,
      total: 16,
    },
    {
      icon: Binary,
      title: "Алгоритмы",
      text: "Сортировка, поиск, рекурсия и классические алгоритмы",
      progress: 0,
      total: 25,
    },
    {
      icon: Box,
      title: "Объекты",
      text: "ООП, прототипы, классы, работа с объектами",
      progress: 10,
      total: 14,
    },
    {
      icon: Zap,
      title: "Лёгкие задачи",
      text: "Начни путь с простых задач для новичков",
      progress: 15,
      total: 30,
    },
    {
      icon: Flame,
      title: "Средние задачи",
      text: "Задачи среднего уровня для практики",
      progress: 7,
      total: 25,
    },
    {
      icon: Target,
      title: "Сложные задачи",
      text: "Испытай себя в продвинутых задачах",
      progress: 2,
      total: 20,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.boxTitle}>
          <span className={styles.title}>Темы обучения</span>
          <p className={styles.text}>
            Выбери тему и начни решать задачи прямо сейчас
          </p>
        </div>
        <div className={styles.containerCards}>
          {cardsItem.map((item, key) => {
            const Icon = item.icon;
            return (
              <div
                className={styles.boxCard}
                onMouseEnter={() => setActiveIndex(key)}
                onMouseLeave={() => setActiveIndex(null)}
                key={key}
              >
                <div className={styles.headerCard}>
                  <div className={styles.logo}>
                    <Icon size={28} />
                  </div>
                  <ArrowRight
                    className={
                      activeIndex === key ? styles.arrowActive : styles.arrow
                    }
                  />
                </div>
                <div className={styles.mainCard}>
                  <div className={styles.textCard}>
                    <span className={styles.titleCard}>{item.title}</span>
                    <p className={styles.textCard}>{item.text}</p>
                  </div>
                  <div className={styles.boxProgress}>
                    <div className={styles.titleProgress}>
                      <span className={styles.titleProgress}>Progress</span>
                      <p className={styles.Progress}>
                        {item.progress}/{item.total}
                      </p>
                    </div>
                    <div
                      className={styles.lineProgress}
                      style={{
                        width: "50%",
                        height: "5px",
                        borderRadius: "8px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topics;
