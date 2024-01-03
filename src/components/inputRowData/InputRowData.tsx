import { FC, KeyboardEvent, useEffect, useState } from "react";
import styles from "./InputRowData.module.scss";
import {
  IRow,
  IRowResponse,
  IRowSendData,
  IRows,
} from "../../interfaces/interfaces";
import { useCreateRowMutation } from "../../api/windsApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIdEditingRow, setRowsData } from "../../redux/slices/masreSlice";

type Props = {
  row: IRow | null;
  firstRow: boolean;
};

export const InputRowData: FC<Props> = ({
  row = {
    name: "",
    salary: 0,
    equipmentCosts: 0,
    overheads: 0,
    estimatedProfit: 0,
  },
  firstRow = false,
}) => {
  const idEditingRow = useAppSelector((state) => state.master.idEditingRow);
  const rows = useAppSelector((state) => state.master.rowsData);
  const [name, setName] = useState<string>("");
  const [salary, setSalary] = useState<number | string>(0);
  const [equipmentCosts, setEquipmentCosts] = useState<number | string>(0);
  const [overheads, setOverheads] = useState<number | string>(0);
  const [estimatedProfit, setEstimatedProfit] = useState<number | string>(0);
  const [createRow, result] = useCreateRowMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      name !== "" &&
      (idEditingRow !== 0 || rows.length === 0)
    ) {
      const newRow: IRowSendData = {
        equipmentCosts: equipmentCosts as number,
        estimatedProfit: estimatedProfit as number,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: overheads as number,
        parentId: idEditingRow === 0 ? null : idEditingRow,
        rowName: name,
        salary: salary as number,
        supportCosts: 0,
      };
      await createRow(newRow);
      setName("");
      setSalary(0);
      setEquipmentCosts(0);
      setOverheads(0);
      setEstimatedProfit(0);
    }
  };

  const itemAdder = (id: number, rows: IRows, row: IRowResponse): IRows => {
    return rows.map((item) => {
      if (item.id === 99999999) {
        return {
          ...item,
          id: row.current.id,
          rowName: row.current.rowName,
          salary: row.current.salary,
          equipmentCosts: row.current.equipmentCosts,
          overheads: row.current.overheads,
          estimatedProfit: row.current.estimatedProfit,
        };
      } else if (item.child.length !== 0) {
        return {
          ...item,
          child: itemAdder(id, item.child, row),
        };
      } else {
        return item;
      }
    });
  };

  const parentsItemAdder = (rows: IRows, row: IRow): IRows => {
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
          child: parentsItemAdder(item.child, row),
        };
      } else {
        return item;
      }
    });
  };

  useEffect(() => {
    if (result.status === "fulfilled") {
      let newRows: IRows = [];
      if (rows.length === 0) {
        newRows = [{ ...result.data.current, child: [] }];
        dispatch(setRowsData(newRows));
      } else if (result.data) {
        newRows = itemAdder(idEditingRow, rows, result.data);
        if (result.data && result.data.changed.length > 0) {
          result.data.changed.forEach(
            (item) => (newRows = parentsItemAdder(newRows, item))
          );
        }
        dispatch(setRowsData(newRows));
        dispatch(setIdEditingRow(0));
      }
    }
  }, [result]);

  return (
    <form className={firstRow ? styles.rowAdder : styles.row}>
      <div className={styles.name}>
        <input
          className={styles.inputName}
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
        ></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
          }}
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
          defaultValue={row?.salary}
        ></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          value={equipmentCosts}
          onChange={(e) => {
            setEquipmentCosts(e.target.value);
          }}
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
          defaultValue={row?.equipmentCosts}
        ></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          value={overheads}
          onChange={(e) => {
            setOverheads(e.target.value);
          }}
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
          defaultValue={row?.overheads}
        ></input>
      </div>
      <div className={styles.num}>
        <input
          className={styles.input}
          type="number"
          min={0}
          value={estimatedProfit}
          onChange={(e) => {
            setEstimatedProfit(e.target.value);
          }}
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
          defaultValue={row?.estimatedProfit}
        ></input>
      </div>
    </form>
  );
};
