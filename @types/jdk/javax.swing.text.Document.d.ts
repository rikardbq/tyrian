declare namespace javax {
  namespace swing {
    namespace text {

      interface Document {
        public static readonly StreamDescriptionProperty: java.lang.String
        public static readonly TitleProperty: java.lang.String
        getLength(): int
        addDocumentListener(arg0: javax.swing.event.DocumentListener): void
        removeDocumentListener(arg0: javax.swing.event.DocumentListener): void
        addUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
        removeUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
        getProperty(arg0: java.lang.Object): java.lang.Object
        putProperty(arg0: java.lang.Object, arg1: java.lang.Object): void
        remove(arg0: int, arg1: int): void
        insertString(arg0: int, arg1: java.lang.String, arg2: javax.swing.text.AttributeSet): void
        getText(arg0: int, arg1: int): java.lang.String
        getText(arg0: int, arg1: int, arg2: javax.swing.text.Segment): void
        getStartPosition(): javax.swing.text.Position
        getEndPosition(): javax.swing.text.Position
        createPosition(arg0: int): javax.swing.text.Position
        getRootElements(): javax.swing.text.Element[]
        getDefaultRootElement(): javax.swing.text.Element
        render(arg0: java.lang.Runnable): void
      }

    }
  }
}
