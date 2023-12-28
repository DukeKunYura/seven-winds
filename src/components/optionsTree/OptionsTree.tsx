import { FC, useState } from "react";
import styles from "./OptionsTree.module.scss";
import { PiFileTextFill } from "react-icons/pi";
import { RiDeleteBinFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setActiveOptions,
  setIdEditingRow,
} from "../../redux/slices/masreSlice";
import { IRow, IRows } from "../../interfaces/interfaces";
import { useDeleteRowMutation } from "../../api/windsApi";

type Props = {
  rows: IRows;
};
export const OptionsTree: FC<Props> = ({ rows }) => {
  const active = useAppSelector((state) => state.master.optionsActive);
  const dispatch = useAppDispatch();
  const [isActiveAdder, setIsActiveAdder] = useState(false);
  const [items, setItems] = useState(rows);
  const [deleteRow] = useDeleteRowMutation();

  const handleHover = () => {
    dispatch(setActiveOptions(true));
  };

  const handleLeave = () => {
    dispatch(setActiveOptions(false));
  };

  const handleAdder = (id: number) => {
    dispatch(setIdEditingRow(id));

    const adder: IRow = {
      child: [],
      equipmentCosts: 0,
      estimatedProfit: 0,
      id: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: "",
      salary: 0,
      supportCosts: 0,
      total: 0,
    };
    if (!isActiveAdder) {
      setItems(
        items.map((item) => {
          if (item.id === id) {
            setIsActiveAdder(true);
            return { ...item, child: [...item.child, adder] };
          } else {
            return item;
          }
        })
      );
    }
  };

  const treeMapper = (arr: any[]) => {
    return (
      <ul className={styles.tree}>
        {arr.map((item: any) => (
          <li key={item.id}>
            <div
              onMouseLeave={handleLeave}
              className={active ? styles.option : styles.item}
            >
              <div className={active ? styles.optionActive : styles.notActive}>
                <PiFileTextFill
                  onClick={() => {
                    handleAdder(item.id);
                  }}
                  onMouseEnter={handleHover}
                  color="6287A7"
                  size="1.5em"
                />
                {active && (
                  <RiDeleteBinFill
                    onClick={() => {
                      deleteRow(item.id);
                    }}
                    color="#da3535"
                    size="1.3em"
                  />
                )}
              </div>
            </div>
            {item.child.length ? treeMapper(item.child) : null}
          </li>
        ))}
      </ul>
    );
  };

  return <div className={styles.mainTable}>{treeMapper(items)}</div>;
};
