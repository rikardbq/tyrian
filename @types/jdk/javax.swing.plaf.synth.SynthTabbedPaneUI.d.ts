declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthTabbedPaneUI extends javax.swing.plaf.basic.BasicTabbedPaneUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {

          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected uninstallDefaults(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          protected createScrollButton(arg0: int): javax.swing.JButton
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          protected createMouseListener(): java.awt.event.MouseListener
          protected getTabLabelShiftX(arg0: int, arg1: int, arg2: boolean): int
          protected getTabLabelShiftY(arg0: int, arg1: int, arg2: boolean): int
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected getBaseline(arg0: int): int
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          protected paintTabArea(arg0: java.awt.Graphics, arg1: int, arg2: int): void
          protected setRolloverTab(arg0: int): void
          protected calculateMaxTabHeight(arg0: int): int
          protected calculateTabWidth(arg0: int, arg1: int, arg2: java.awt.FontMetrics): int
          protected calculateMaxTabWidth(arg0: int): int
          protected getTabInsets(arg0: int, arg1: int): java.awt.Insets
          protected getFontMetrics(): java.awt.FontMetrics
          protected createLayoutManager(): java.awt.LayoutManager
          static access$000(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$100(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$200(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$300(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$400(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$500(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$600(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$700(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$800(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): int
          static access$900(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): int[]
          static access$1000(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): int[]
          static access$1100(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): int
          static access$1200(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$1300(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
          static access$1400(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
          static access$1500(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
          static access$1600(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
        }

      }
    }
  }
}
