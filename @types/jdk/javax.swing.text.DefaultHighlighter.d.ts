declare namespace javax {
  namespace swing {
    namespace text {

      class DefaultHighlighter extends javax.swing.text.LayeredHighlighter {
        public static readonly DefaultPainter: javax.swing.text.LayeredHighlighter$LayerPainter
        public constructor()
        public paint(arg0: java.awt.Graphics): void
        public install(arg0: javax.swing.text.JTextComponent): void
        public deinstall(arg0: javax.swing.text.JTextComponent): void
        public addHighlight(arg0: int, arg1: int, arg2: javax.swing.text.Highlighter$HighlightPainter): java.lang.Object
        public removeHighlight(arg0: java.lang.Object): void
        public removeAllHighlights(): void
        public changeHighlight(arg0: java.lang.Object, arg1: int, arg2: int): void
        public getHighlights(): javax.swing.text.Highlighter$Highlight[]
        public paintLayeredHighlights(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: java.awt.Shape, arg4: javax.swing.text.JTextComponent, arg5: javax.swing.text.View): void
        public setDrawsLayeredHighlights(arg0: boolean): void
        public getDrawsLayeredHighlights(): boolean
      }

    }
  }
}
