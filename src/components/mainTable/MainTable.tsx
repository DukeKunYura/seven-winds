import { FC } from "react";
import styles from "./MainTable.module.scss";
import { useGetPostsQuery } from "../../api/windsApi";

export const MainTable: FC = () => {
  const { data: posts } = useGetPostsQuery();
  console.log(posts);

  return (
    <div className={styles.mainTable}>
      {posts?.map((item) => (
        <div>{item.rowName}</div>
      ))}
    </div>
  );
};
