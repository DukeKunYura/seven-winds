export interface IRow {
  child: IRows;
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}

export type IRows = IRow[];

export interface IRowSendData {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId: number | null;
  rowName: string;
  salary: number;
  supportCosts: number;
}

export interface IRowUpdateData {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
}

export interface IRowResponse {
  current: {
    id: number;
    rowName: string;
    total: 0;
    salary: 0;
    mimExploitation: 0;
    machineOperatorSalary: 0;
    materials: 0;
    mainCosts: 0;
    supportCosts: 0;
    equipmentCosts: 0;
    overheads: 0;
    estimatedProfit: 0;
  };
  changed: [];
}
