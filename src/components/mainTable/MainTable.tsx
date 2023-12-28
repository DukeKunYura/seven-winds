import { FC } from "react";
import styles from "./MainTable.module.scss";
import { OptionsTree } from "../optionsTree/OptionsTree";
import { TableHeader } from "../tableHeader/TableHeader";
import { useGetRowsQuery } from "../../api/windsApi";
import { Rows } from "../rows/Rows";
import { InputRowData } from "../inputRowData/InputRowData";

export const MainTable: FC = () => {
  const { data: rows, isSuccess } = useGetRowsQuery();
  console.log(!rows);

  return (
    <div className={styles.mainTable}>
      <TableHeader />
      <div className={styles.content}>
        {rows?.length === 0 && <InputRowData row={null} />}
        {isSuccess && rows?.length !== 0 && <OptionsTree rows={rows} />}
        {rows && <Rows rows={rows} />}
      </div>
    </div>
  );
};
