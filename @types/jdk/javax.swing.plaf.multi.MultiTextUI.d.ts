declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace multi {

        class MultiTextUI extends javax.swing.plaf.TextUI {

          protected uis: java.util.Vector<javax.swing.plaf.ComponentUI>
          public constructor()
          public getUIs(): javax.swing.plaf.ComponentUI[]
          public getToolTipText(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point): java.lang.String
          public modelToView(arg0: javax.swing.text.JTextComponent, arg1: int): java.awt.Rectangle
          public modelToView(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: javax.swing.text.Position$Bias): java.awt.Rectangle
          public modelToView2D(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: javax.swing.text.Position$Bias): java.awt.geom.Rectangle2D
          public viewToModel(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point): int
          public viewToModel(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point, arg2: javax.swing.text.Position$Bias[]): int
          public viewToModel2D(arg0: javax.swing.text.JTextComponent, arg1: java.awt.geom.Point2D, arg2: javax.swing.text.Position$Bias[]): int
          public getNextVisualPositionFrom(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
          public damageRange(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int): void
          public damageRange(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int, arg3: javax.swing.text.Position$Bias, arg4: javax.swing.text.Position$Bias): void
          public getEditorKit(arg0: javax.swing.text.JTextComponent): javax.swing.text.EditorKit
          public getRootView(arg0: javax.swing.text.JTextComponent): javax.swing.text.View
          public contains(arg0: javax.swing.JComponent, arg1: int, arg2: int): boolean
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getAccessibleChildrenCount(arg0: javax.swing.JComponent): int
          public getAccessibleChild(arg0: javax.swing.JComponent, arg1: int): javax.accessibility.Accessible
        }

      }
    }
  }
}
