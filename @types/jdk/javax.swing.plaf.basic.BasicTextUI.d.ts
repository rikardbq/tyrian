declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        abstract class BasicTextUI extends javax.swing.plaf.TextUI implements javax.swing.text.ViewFactory {
          editor: javax.swing.text.JTextComponent
          painted: boolean
          rootView: javax.swing.plaf.basic.BasicTextUI$RootView
          updateHandler: javax.swing.plaf.basic.BasicTextUI$UpdateHandler
          public constructor()
          protected createCaret(): javax.swing.text.Caret
          protected createHighlighter(): javax.swing.text.Highlighter
          protected getKeymapName(): java.lang.String
          protected createKeymap(): javax.swing.text.Keymap
          protected propertyChange(arg0: java.beans.PropertyChangeEvent): void
          protected abstract getPropertyPrefix(): java.lang.String
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installKeyboardActions(): void
          getInputMap(): javax.swing.InputMap
          updateFocusAcceleratorBinding(arg0: boolean): void
          updateFocusTraversalKeys(): void
          getTransferHandler(): javax.swing.TransferHandler
          getActionMap(): javax.swing.ActionMap
          createActionMap(): javax.swing.ActionMap
          protected uninstallKeyboardActions(): void
          protected paintBackground(arg0: java.awt.Graphics): void
          protected getComponent(): javax.swing.text.JTextComponent
          protected modelChanged(): void
          protected setView(arg0: javax.swing.text.View): void
          protected paintSafely(arg0: java.awt.Graphics): void
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected getVisibleEditorRect(): java.awt.Rectangle
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
          public getToolTipText(arg0: javax.swing.text.JTextComponent, arg1: java.awt.Point): java.lang.String
          public create(arg0: javax.swing.text.Element): javax.swing.text.View
          public create(arg0: javax.swing.text.Element, arg1: int, arg2: int): javax.swing.text.View
        }

      }
    }
  }
}
