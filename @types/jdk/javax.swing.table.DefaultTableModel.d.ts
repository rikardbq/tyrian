declare namespace javax {
  namespace swing {
    namespace table {

      class DefaultTableModel extends javax.swing.table.AbstractTableModel implements java.io.Serializable {
        protected dataVector: java.util.Vector<java.util.Vector>
        protected columnIdentifiers: java.util.Vector
        public constructor()
        public constructor(arg0: int, arg1: int)
        public constructor(arg0: java.util.Vector<unknown>, arg1: int)
        public constructor(arg0: java.lang.Object[], arg1: int)
        public constructor(arg0: java.util.Vector<java.util.Vector>, arg1: java.util.Vector<unknown>)
        public constructor(arg0: java.lang.Object[][], arg1: java.lang.Object[])
        public getDataVector(): java.util.Vector<java.util.Vector>
        public setDataVector(arg0: java.util.Vector<java.util.Vector>, arg1: java.util.Vector<unknown>): void
        public setDataVector(arg0: java.lang.Object[][], arg1: java.lang.Object[]): void
        public newDataAvailable(arg0: javax.swing.event.TableModelEvent): void
        public newRowsAdded(arg0: javax.swing.event.TableModelEvent): void
        public rowsRemoved(arg0: javax.swing.event.TableModelEvent): void
        public setNumRows(arg0: int): void
        public setRowCount(arg0: int): void
        public addRow(arg0: java.util.Vector<unknown>): void
        public addRow(arg0: java.lang.Object[]): void
        public insertRow(arg0: int, arg1: java.util.Vector<unknown>): void
        public insertRow(arg0: int, arg1: java.lang.Object[]): void
        public moveRow(arg0: int, arg1: int, arg2: int): void
        public removeRow(arg0: int): void
        public setColumnIdentifiers(arg0: java.util.Vector<unknown>): void
        public setColumnIdentifiers(arg0: java.lang.Object[]): void
        public setColumnCount(arg0: int): void
        public addColumn(arg0: java.lang.Object): void
        public addColumn(arg0: java.lang.Object, arg1: java.util.Vector<unknown>): void
        public addColumn(arg0: java.lang.Object, arg1: java.lang.Object[]): void
        public getRowCount(): int
        public getColumnCount(): int
        public getColumnName(arg0: int): java.lang.String
        public isCellEditable(arg0: int, arg1: int): boolean
        public getValueAt(arg0: int, arg1: int): java.lang.Object
        public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
        protected static convertToVector(arg0: java.lang.Object[]): java.util.Vector<java.lang.Object>
        protected static convertToVector(arg0: java.lang.Object[][]): java.util.Vector<java.util.Vector<java.lang.Object>>
      }

    }
  }
}
