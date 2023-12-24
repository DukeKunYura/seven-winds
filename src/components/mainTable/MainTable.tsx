import { FC } from "react";
import styles from "./MainTable.module.scss";
import { useGetPostsQuery } from "../../api/windsApi";
import { OptionsTree } from "../optionsTree/OptionsTree";
import { TableHeader } from "../tableHeader/TableHeader";

export const MainTable: FC = () => {
  const { data: posts } = useGetPostsQuery();
  console.log(posts);

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
