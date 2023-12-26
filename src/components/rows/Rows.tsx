import { FC } from "react";
import styles from "./Rows.module.scss";
import { RowData } from "../rowData/RowData";
import { IRows } from "../../interfaces/interfaces";

type Props = {
  rows: IRows;
};
export const Rows: FC<Props> = ({ rows }) => {
  //   const active = useAppSelector((state) => state.master.optionsActive);
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
          <>
            <RowData row={item} />
            {item.child.length ? rowsMapper(item.child) : null}
          </>
        ))}
      </div>
    );
  };

  const result = rowsMapper(rows);

  return <>{result}</>;
};
