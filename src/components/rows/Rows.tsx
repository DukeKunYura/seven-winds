import { FC } from "react";
import styles from "./Rows.module.scss";
import { RowData } from "../rowData/RowData";
import { InputRowData } from "../inputRowData/InputRowData";
import { useAppSelector } from "../../redux/hooks";

export const Rows: FC = () => {
  const rows = useAppSelector((state) => state.master.rowsData);
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

  return <>{rowsMapper(rows)}</>;
};
