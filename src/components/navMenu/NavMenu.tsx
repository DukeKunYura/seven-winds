import { FC } from "react";
import { PiSquaresFourFill } from "react-icons/pi";
import styles from "./NavMenu.module.scss";

export const NavMenu: FC = () => {
  const items: any[] = [
    "По проекту",
    "Объекты",
    "РД",
    "МТО",
    "СМР",
    "Графмк",
    "МиМ",
    "Рабочие",
    "Капвложения",
    "Бюджет",
    "Финансирование",
    "Панорамы",
    "Камеры",
    "Поручения",
    "Контрагенты",
  ];

  return (
    <div className={styles.menu}>
      {items.map((item) => (
        <div className={styles.item} key={item}>
          <a className={styles.icon}>
            <PiSquaresFourFill color="#A1A1AA" size="1.5em" />
          </a>
          <a className={styles.text}>{item}</a>
        </div>
      ))}
    </div>
  );
};
