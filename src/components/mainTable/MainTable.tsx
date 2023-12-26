import { FC } from "react";
import styles from "./MainTable.module.scss";
import { OptionsTree } from "../optionsTree/OptionsTree";
import { TableHeader } from "../tableHeader/TableHeader";
import { useGetRowsQuery } from "../../api/windsApi";

export const MainTable: FC = () => {
  const { data: rows } = useGetRowsQuery();
  console.log(rows);

  return (
    <div className={styles.mainTable}>
      <TableHeader />
      {/* {posts?.map((item) => (
        <div>{item.rowName}</div>
      ))} */}

      <OptionsTree />
    </div>
  );
};
