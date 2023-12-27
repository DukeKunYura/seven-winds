import { FC } from "react";
import styles from "./InputRowData.module.scss";
import { IRow } from "../../interfaces/interfaces";

type Props = {
  row: IRow | null;
};

export const InputRowData: FC<Props> = ({ row = null }) => {
  return (
    <div className={styles.row}>
      <div className={styles.name}>
        <input className={styles.inputName} type="text"></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          value={row?.salary}
        ></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          value={row?.equipmentCosts}
        ></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          value={row?.overheads}
        ></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          value={row?.estimatedProfit}
        ></input>
      </div>
    </div>
  );
};
