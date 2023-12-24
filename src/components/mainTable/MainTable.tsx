import { FC } from "react";
import styles from "./MainTable.module.scss";
import { useGetPostsQuery } from "../../api/windsApi";
import { PiFileTextFill } from "react-icons/pi";

export const MainTable: FC = () => {
  const { data: posts } = useGetPostsQuery();
  console.log(posts);

  return (
    <div className={styles.mainTable}>
      {posts?.map((item) => (
        <div>{item.rowName}</div>
      ))}

      <ul className={styles.tree}>
        <li>
          <div className={styles.item}>
            <PiFileTextFill color="6287A7" size="1.5em" />
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <PiFileTextFill color="6287A7" size="1.5em" />
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <PiFileTextFill color="6287A7" size="1.5em" />
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <PiFileTextFill color="6287A7" size="1.5em" />
          </div>
          <ul>
            <li>
              <div className={styles.item}>
                <PiFileTextFill color="6287A7" size="1.5em" />
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <PiFileTextFill color="6287A7" size="1.5em" />
              </div>
              <ul>
                <li>
                  <div className={styles.item}>
                    <PiFileTextFill color="6287A7" size="1.5em" />
                  </div>
                </li>
                <li>
                  <div className={styles.item}>
                    <PiFileTextFill color="6287A7" size="1.5em" />
                  </div>
                </li>
                <li>
                  <div className={styles.item}>
                    <PiFileTextFill color="6287A7" size="1.5em" />
                  </div>
                </li>
                <li>
                  <div className={styles.item}>
                    <PiFileTextFill color="6287A7" size="1.5em" />
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className={styles.item}>
                <PiFileTextFill color="6287A7" size="1.5em" />
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <PiFileTextFill color="6287A7" size="1.5em" />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
