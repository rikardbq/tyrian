declare namespace java {
  namespace beans {

    class PropertyChangeListenerProxy extends java.util.EventListenerProxy<java.beans.PropertyChangeListener> implements java.beans.PropertyChangeListener {

      public constructor(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener)
      public propertyChange(arg0: java.beans.PropertyChangeEvent): void
      public getPropertyName(): java.lang.String
    }

  }
}
