import { FC } from "react";
import styles from "./RowData.module.scss";

type Props = {
  name: string;
};

export const RowData: FC<Props> = ({ name }) => {
  return (
    <div className={styles.row}>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
