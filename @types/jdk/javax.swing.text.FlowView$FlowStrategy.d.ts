declare namespace javax {
  namespace swing {
    namespace text {

      class FlowView$FlowStrategy {

        damageStart: javax.swing.text.Position
        viewBuffer: java.util.Vector<javax.swing.text.View>
        static readonly $assertionsDisabled: boolean
        public constructor()
        addDamage(arg0: javax.swing.text.FlowView, arg1: int): void
        unsetDamage(): void
        public insertUpdate(arg0: javax.swing.text.FlowView, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Rectangle): void
        public removeUpdate(arg0: javax.swing.text.FlowView, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Rectangle): void
        public changedUpdate(arg0: javax.swing.text.FlowView, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Rectangle): void
        protected getLogicalView(arg0: javax.swing.text.FlowView): javax.swing.text.View
        public layout(arg0: javax.swing.text.FlowView): void
        protected layoutRow(arg0: javax.swing.text.FlowView, arg1: int, arg2: int): int
        protected adjustRow(arg0: javax.swing.text.FlowView, arg1: int, arg2: int, arg3: int): void
        reparentViews(arg0: javax.swing.text.View, arg1: int): void
        protected createView(arg0: javax.swing.text.FlowView, arg1: int, arg2: int, arg3: int): javax.swing.text.View
      }

    }
  }
}
