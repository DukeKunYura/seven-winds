import { FC } from "react";
import styles from "./TableHeader.module.scss";
import { useGetPostsQuery } from "../../api/windsApi";

export const TableHeader: FC = () => {
  const { data: posts } = useGetPostsQuery();
  console.log(posts);

  return (
    <div className={styles.header}>
      <div className={styles.level}>Уровень</div>
      <div className={styles.label}>Наименование работ</div>
      <div className={styles.num}>Основная з/п</div>
      <div className={styles.num}>Оборудование</div>
      <div className={styles.num}>Накладные расходы</div>
      <div className={styles.num}>Сметная прибыль</div>
    </div>
  );
};
