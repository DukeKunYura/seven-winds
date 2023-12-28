import { FC } from "react";
import styles from "./Rows.module.scss";
import { RowData } from "../rowData/RowData";
import { IRows } from "../../interfaces/interfaces";
import { useAppSelector } from "../../redux/hooks";
import { InputRowData } from "../inputRowData/InputRowData";

type Props = {
  rows: IRows;
};
export const Rows: FC<Props> = ({ rows }) => {
  const idEditingRow = useAppSelector((state) => state.master.idEditingRow);
  //   const dispatch = useAppDispatch();

  //   const handleHover = () => {
  //     dispatch(setActiveOptions(true));
  //   };

  //   const handleLeave = () => {
  //     dispatch(setActiveOptions(false));
  //   };

  const rowsMapper = (arr: any[]) => {
    return (
      <div className={styles.list}>
        {arr.map((item: any) => (
          <div key={item.id}>
            <RowData row={item} />
            {item.id === idEditingRow && (
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
