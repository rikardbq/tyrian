declare namespace javax {
  namespace swing {
    namespace text {

      class PasswordView extends javax.swing.text.FieldView {

        static ONE: char[]
        public constructor(arg0: javax.swing.text.Element)
        protected drawUnselectedText(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): int
        protected drawUnselectedText(arg0: java.awt.Graphics2D, arg1: float, arg2: float, arg3: int, arg4: int): float
        protected drawSelectedText(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): int
        protected drawSelectedText(arg0: java.awt.Graphics2D, arg1: float, arg2: float, arg3: int, arg4: int): float
        protected drawEchoCharacter(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: char): int
        protected drawEchoCharacter(arg0: java.awt.Graphics2D, arg1: float, arg2: float, arg3: char): float
        public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
        public getPreferredSpan(arg0: int): float
      }

    }
  }
}
