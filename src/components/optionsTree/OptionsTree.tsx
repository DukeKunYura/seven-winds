import { FC } from "react";
import styles from "./OptionsTree.module.scss";
import { PiFileTextFill } from "react-icons/pi";
import { RiDeleteBinFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setActiveOptions } from "../../redux/slices/masreSlice";
import { IRows } from "../../interfaces/interfaces";

type Props = {
  rows: IRows;
};
export const OptionsTree: FC<Props> = ({ rows }) => {
  const active = useAppSelector((state) => state.master.optionsActive);
  const dispatch = useAppDispatch();
  //const { data: rows } = useGetRowsQuery();
  console.log(rows);

  const handleHover = () => {
    dispatch(setActiveOptions(true));
  };

  const handleLeave = () => {
    dispatch(setActiveOptions(false));
  };

  const itemsArr = [
    { name: "one", child: [] },
    { name: "two", child: [] },
    {
      name: "three",
      child: [
        { name: "oneC", child: [] },
        { name: "twoC", child: [] },
        {
          name: "threeC",
          child: [
            { name: "oned", child: [] },
            { name: "twod", child: [] },
            { name: "threed", child: [] },
            { name: "fourd", child: [] },
          ],
        },
        { name: "fourC", child: [] },
      ],
    },
    { name: "four", child: [] },
  ];

  const treeMapper = (arr: any[]) => {
    return (
      <ul className={styles.tree}>
        {arr.map((item: any) => (
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
            {item.child.length ? treeMapper(item.child) : null}
          </li>
        ))}
      </ul>
    );
  };

  const result = treeMapper(itemsArr);

  const resultFromApi = treeMapper(rows);

  // useEffect(() => {
  //   const resultFromApi = treeMapper(rows)
  // }, []);

  return (
    <div className={styles.mainTable}>
      {resultFromApi}
      {result}
      <ul className={styles.tree} onMouseLeave={handleLeave}>
        {rows?.map((item) => (
          <li key={item.id}>
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
            {item.rowName}
          </li>
        ))}
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
