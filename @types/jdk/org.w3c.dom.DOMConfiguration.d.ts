declare namespace org {
  namespace w3c {
    namespace dom {

      interface DOMConfiguration {
        setParameter(arg0: java.lang.String, arg1: java.lang.Object): void
        getParameter(arg0: java.lang.String): java.lang.Object
        canSetParameter(arg0: java.lang.String, arg1: java.lang.Object): boolean
        getParameterNames(): org.w3c.dom.DOMStringList
      }

    }
  }
}
