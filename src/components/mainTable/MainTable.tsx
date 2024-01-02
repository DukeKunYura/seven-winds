import { FC, useEffect } from "react";
import styles from "./MainTable.module.scss";
import { OptionsTree } from "../optionsTree/OptionsTree";
import { TableHeader } from "../tableHeader/TableHeader";
import { useGetRowsQuery } from "../../api/windsApi";
import { Rows } from "../rows/Rows";
import { setRowsData } from "../../redux/slices/masreSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const MainTable: FC = () => {
  const data = useAppSelector((state) => state.master.rowsData);
  const { data: rows, isSuccess } = useGetRowsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setRowsData(rows));
  }, [isSuccess]);

  return (
    <div className={styles.mainTable}>
      <TableHeader />
      <div className={styles.content}>
        {data && <OptionsTree rows={data} />}
        {data && <Rows />}
      </div>
    </div>
  );
};
