declare namespace java {
  namespace awt {

    class TextField extends java.awt.TextComponent {

      columns: int
      echoChar: char
      actionListener: java.awt.event.ActionListener
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: int)
      public constructor(arg0: java.lang.String, arg1: int)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getEchoChar(): char
      public setEchoChar(arg0: char): void
      public setEchoCharacter(arg0: char): void
      public setText(arg0: java.lang.String): void
      public echoCharIsSet(): boolean
      public getColumns(): int
      public setColumns(arg0: int): void
      public getPreferredSize(arg0: int): java.awt.Dimension
      public preferredSize(arg0: int): java.awt.Dimension
      public getPreferredSize(): java.awt.Dimension
      public preferredSize(): java.awt.Dimension
      public getMinimumSize(arg0: int): java.awt.Dimension
      public minimumSize(arg0: int): java.awt.Dimension
      public getMinimumSize(): java.awt.Dimension
      public minimumSize(): java.awt.Dimension
      public addActionListener(arg0: java.awt.event.ActionListener): void
      public removeActionListener(arg0: java.awt.event.ActionListener): void
      public getActionListeners(): java.awt.event.ActionListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processActionEvent(arg0: java.awt.event.ActionEvent): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
