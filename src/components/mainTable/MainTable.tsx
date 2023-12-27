import { FC } from "react";
import styles from "./MainTable.module.scss";
import { OptionsTree } from "../optionsTree/OptionsTree";
import { TableHeader } from "../tableHeader/TableHeader";
import { useGetRowsQuery } from "../../api/windsApi";
import { Rows } from "../rows/Rows";
import { InputRowData } from "../inputRowData/InputRowData";

export const MainTable: FC = () => {
  const { data: rows } = useGetRowsQuery();
  console.log(rows);

  return (
    <div className={styles.mainTable}>
      <TableHeader />
      <div className={styles.content}>
        {!rows && <InputRowData row={null} />}
        {rows && <OptionsTree rows={rows} />}
        {rows && <Rows rows={rows} />}
      </div>
    </div>
  );
};
