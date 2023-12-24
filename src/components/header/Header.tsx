import { FC } from "react";
import { useGetPostsQuery } from "../../api/windsApi";
import styles from "./Header.module.scss";
import { CgMenuGridR } from "react-icons/cg";
import { TiArrowBack } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";

export const Header: FC = () => {
  //const link = useAppSelector((state) => state.master.activeLink);
  const { data: posts } = useGetPostsQuery();
  console.log(posts);

  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <a className={styles.icon}>
          <CgMenuGridR color="#A1A1AA" size="1.5em" />
        </a>
        <a className={styles.icon}>
          <TiArrowBack color="#A1A1AA" size="1.5em" />
        </a>
        <a className={styles.link}>Просмотр</a>
        <a className={styles.link}>Управление</a>
      </div>
      <div className={styles.title}>
        <a className={styles.nav}>
          <div className={styles.navButton}>
            <div>Название проекта</div>
            <div className={styles.abb}>Аббревиатура</div>
          </div>
          <div>
            <FaChevronDown color="white" size="1em" />
          </div>
        </a>
        <a className={styles.nav}>
          <a className={styles.link}>Строительно-монтажные работы</a>
          <a className={styles.link}></a>
        </a>
      </div>
    </div>
  );
};
