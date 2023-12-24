import { FC } from "react";
import styles from "./Main.module.scss";
import { NavMenu } from "../navMenu/NavMenu";
import { MainTable } from "../mainTable/MainTable";

export const Main: FC = () => {
  return (
    <div className={styles.main}>
      <NavMenu />
      <MainTable />
    </div>
  );
};
