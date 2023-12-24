import { FC } from "react";
import styles from "./OptionsTree.module.scss";
import { PiFileTextFill } from "react-icons/pi";
import { RiDeleteBinFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setActiveOptions } from "../../redux/slices/masreSlice";

export const OptionsTree: FC = () => {
  const active = useAppSelector((state) => state.master.optionsActive);
  const dispatch = useAppDispatch();

  const handleHover = () => {
    dispatch(setActiveOptions(true));
  };

  const handleLeave = () => {
    dispatch(setActiveOptions(false));
  };

  return (
    <div className={styles.mainTable}>
      <ul className={styles.tree} onMouseLeave={handleLeave}>
        <li>
          <div className={active ? styles.option : styles.item}>
            <div className={active ? styles.optionActive : styles.notActive}>
              <PiFileTextFill
                onMouseEnter={handleHover}
                color="6287A7"
                size="1.5em"
              />
              {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
            </div>
          </div>
        </li>
        <li>
          <div className={active ? styles.option : styles.item}>
            <div className={active ? styles.optionActive : styles.notActive}>
              <PiFileTextFill
                onMouseEnter={handleHover}
                color="6287A7"
                size="1.5em"
              />
              {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
            </div>
          </div>
        </li>
        <li>
          <div className={active ? styles.option : styles.item}>
            <div className={active ? styles.optionActive : styles.notActive}>
              <PiFileTextFill
                onMouseEnter={handleHover}
                color="6287A7"
                size="1.5em"
              />
              {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
            </div>
          </div>
        </li>
        <li>
          <div className={active ? styles.option : styles.item}>
            <div className={active ? styles.optionActive : styles.notActive}>
              <PiFileTextFill
                onMouseEnter={handleHover}
                color="6287A7"
                size="1.5em"
              />
              {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
            </div>
          </div>
          <ul>
            <li>
              <div className={active ? styles.option : styles.item}>
                <div
                  className={active ? styles.optionActive : styles.notActive}
                >
                  <PiFileTextFill
                    onMouseEnter={handleHover}
                    color="6287A7"
                    size="1.5em"
                  />
                  {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
                </div>
              </div>
            </li>
            <li>
              <div className={active ? styles.option : styles.item}>
                <div
                  className={active ? styles.optionActive : styles.notActive}
                >
                  <PiFileTextFill
                    onMouseEnter={handleHover}
                    color="6287A7"
                    size="1.5em"
                  />
                  {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
                </div>
              </div>
              <ul>
                <li>
                  <div className={active ? styles.option : styles.item}>
                    <div
                      className={
                        active ? styles.optionActive : styles.notActive
                      }
                    >
                      <PiFileTextFill
                        onMouseEnter={handleHover}
                        color="6287A7"
                        size="1.5em"
                      />
                      {active && (
                        <RiDeleteBinFill color="#da3535" size="1.3em" />
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={active ? styles.option : styles.item}>
                    <div
                      className={
                        active ? styles.optionActive : styles.notActive
                      }
                    >
                      <PiFileTextFill
                        onMouseEnter={handleHover}
                        color="6287A7"
                        size="1.5em"
                      />
                      {active && (
                        <RiDeleteBinFill color="#da3535" size="1.3em" />
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={active ? styles.option : styles.item}>
                    <div
                      className={
                        active ? styles.optionActive : styles.notActive
                      }
                    >
                      <PiFileTextFill
                        onMouseEnter={handleHover}
                        color="6287A7"
                        size="1.5em"
                      />
                      {active && (
                        <RiDeleteBinFill color="#da3535" size="1.3em" />
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={active ? styles.option : styles.item}>
                    <div
                      className={
                        active ? styles.optionActive : styles.notActive
                      }
                    >
                      <PiFileTextFill
                        onMouseEnter={handleHover}
                        color="6287A7"
                        size="1.5em"
                      />
                      {active && (
                        <RiDeleteBinFill color="#da3535" size="1.3em" />
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className={active ? styles.option : styles.item}>
                <div
                  className={active ? styles.optionActive : styles.notActive}
                >
                  <PiFileTextFill
                    onMouseEnter={handleHover}
                    color="6287A7"
                    size="1.5em"
                  />
                  {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
                </div>
              </div>
            </li>
            <li>
              <div className={active ? styles.option : styles.item}>
                <div
                  className={active ? styles.optionActive : styles.notActive}
                >
                  <PiFileTextFill
                    onMouseEnter={handleHover}
                    color="6287A7"
                    size="1.5em"
                  />
                  {active && <RiDeleteBinFill color="#da3535" size="1.3em" />}
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
