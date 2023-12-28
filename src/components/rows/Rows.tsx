import { FC } from "react";
import styles from "./Rows.module.scss";
import { RowData } from "../rowData/RowData";
import { IRows } from "../../interfaces/interfaces";
import { InputRowData } from "../inputRowData/InputRowData";

type Props = {
  rows: IRows;
};
export const Rows: FC<Props> = ({ rows }) => {
  const rowsMapper = (arr: any[]) => {
    return (
      <div className={styles.list}>
        {arr.map((item: any) => (
          <div key={item.id}>
            {item.id !== 99999999 ? (
              <RowData row={item} />
            ) : (
              <InputRowData row={null} firstRow={false} />
            )}
            {item.child.length ? rowsMapper(item.child) : null}
          </div>
        ))}
      </div>
    );
  };

  const result = rowsMapper(rows);

  return <>{result}</>;
};
