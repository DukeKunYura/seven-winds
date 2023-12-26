import { FC } from "react";
import styles from "./RowData.module.scss";
import { IRow } from "../../interfaces/interfaces";

type Props = {
  row: IRow;
};

export const RowData: FC<Props> = ({ row }) => {
  return (
    <div className={styles.row}>
      <div className={styles.name}>{row.rowName}</div>
      <div className={styles.num}>{row.salary}</div>
      <div className={styles.num}>{row.equipmentCosts}</div>
      <div className={styles.num}>{row.overheads}</div>
      <div className={styles.num}>{row.estimatedProfit}</div>
    </div>
  );
};
