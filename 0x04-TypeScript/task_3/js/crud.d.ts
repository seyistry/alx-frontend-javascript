import { RowID, RowElement } from './interface';
declare module crud {
  export function insertRow(row: RowElement): number {}
  export function deleteRow(rowId: RowID): void {}
}

declare module updateRow {
  export function updateRow(rowId: RowID, row: RowElement): number {
    return rowId;
  }
}
