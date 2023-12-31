import { FC, useEffect } from "react";
import styles from "./OptionsTree.module.scss";
import { PiFileTextFill } from "react-icons/pi";
import { RiDeleteBinFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setActiveOptions,
  setIdEditingRow,
  setRowsData,
} from "../../redux/slices/masreSlice";
import { IRow, IRows } from "../../interfaces/interfaces";
import { useDeleteRowMutation } from "../../api/windsApi";

type Props = {
  rows: IRows;
};
export const OptionsTree: FC<Props> = ({ rows }) => {
  const active = useAppSelector((state) => state.master.optionsActive);
  const idEditingRow = useAppSelector((state) => state.master.idEditingRow);
  const dispatch = useAppDispatch();
  const [deleteRow, result] = useDeleteRowMutation();

  const itemDeleter = (id: number, rows: IRows): IRows => {
    let newRows: IRows = [];
    newRows = rows.filter((item) => item.id !== id);
    return newRows.map((item) => {
      if (item.child.length !== 0) {
        return { ...item, child: itemDeleter(id, item.child) };
      } else {
        return item;
      }
    });
  };

  const parentsItemUpdater = (rows: IRows, row: IRow): IRows => {
    return rows.map((item) => {
      if (item.id === row.id) {
        return {
          ...item,
          salary: row.salary,
          equipmentCosts: row.equipmentCosts,
          overheads: row.overheads,
          estimatedProfit: row.estimatedProfit,
        };
      } else if (item.child.length !== 0) {
        return {
          ...item,
          child: parentsItemUpdater(item.child, row),
        };
      } else {
        return item;
      }
    });
  };

  const handleDeleter = (id: number) => {
    deleteRow(id);
    dispatch(setRowsData(itemDeleter(id, rows)));
  };

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
      id: 99999999,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: "edit",
      salary: 0,
      supportCosts: 0,
      total: 0,
    };

    const inputItemAdder = (id: number, rows: IRows): IRows => {
      return rows.map((item) => {
        if (item.id === id) {
          return { ...item, child: [...item.child, adder] };
        } else if (item.child.length !== 0) {
          return { ...item, child: inputItemAdder(id, item.child) };
        } else {
          return item;
        }
      });
    };

    if (idEditingRow === 0) {
      dispatch(setRowsData(inputItemAdder(id, rows)));
    }
  };

  useEffect(() => {
    if (result.status === "fulfilled") {
      let newRows: IRows = rows;
      if (result.data.changed.length > 0) {
        result.data.changed.forEach(
          (item) => (newRows = parentsItemUpdater(newRows, item))
        );
      }
      dispatch(setRowsData(newRows));
    }
  }, [result]);

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
                      handleDeleter(item.id);
                    }}
                    color="#da3535"
                    size="1.3em"
                  />
                )}
              </div>
            </div>
            {item.child.length > 0 ? treeMapper(item.child) : null}
          </li>
        ))}
      </ul>
    );
  };

  return <div className={styles.mainTable}>{treeMapper(rows)}</div>;
};
