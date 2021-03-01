declare namespace javax {
  namespace swing {
    namespace undo {

      class UndoableEditSupport {

        protected updateLevel: int
        protected compoundEdit: javax.swing.undo.CompoundEdit
        protected listeners: java.util.Vector<javax.swing.event.UndoableEditListener>
        protected realSource: java.lang.Object
        public constructor()
        public constructor(arg0: java.lang.Object)
        public addUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
        public removeUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
        public getUndoableEditListeners(): javax.swing.event.UndoableEditListener[]
        protected _postEdit(arg0: javax.swing.undo.UndoableEdit): void
        public postEdit(arg0: javax.swing.undo.UndoableEdit): void
        public getUpdateLevel(): int
        public beginUpdate(): void
        protected createCompoundEdit(): javax.swing.undo.CompoundEdit
        public endUpdate(): void
        public toString(): java.lang.String
      }

    }
  }
}
