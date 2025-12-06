import React from "react";
import styles from "./style/Styles.module.css";
import { Code2, Home, BookOpen, TrendingUp, User } from "lucide-react";

const Header = () => {
  const navItem = [
    { name: "Главная", icon: Home },
    { name: "Темы", icon: BookOpen },
    { name: "Прогресс", icon: TrendingUp },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.boxLogo}>
        <img src="" alt="" className={styles.logo} />
        <span className={styles.titleLogo}>LearnJS</span>
      </div>

      <div className={styles.navbar}>
        {navItem.map((item, key) => {
          const Icon = item.icon;
          return (
            <button key={key} className={styles.navItemBtn}>
              <div className={styles.itemIcon}>
                <Icon size={20} />
              </div>
              <div className={styles.itemText}>{item.name}</div>
            </button>
          );
        })}
      </div>
      <div className={styles.boxUser}>
        <button className={styles.userBtn}>
          <User />
        </button>
      </div>
    </div>
  );
};

export default Header;
