declare namespace java {
  namespace beans {
    namespace beancontext {

      interface BeanContextServices extends java.beans.beancontext.BeanContext, java.beans.beancontext.BeanContextServicesListener {
        addService(arg0: java.lang.Class<unknown>, arg1: java.beans.beancontext.BeanContextServiceProvider): boolean
        revokeService(arg0: java.lang.Class<unknown>, arg1: java.beans.beancontext.BeanContextServiceProvider, arg2: boolean): void
        hasService(arg0: java.lang.Class<unknown>): boolean
        getService(arg0: java.beans.beancontext.BeanContextChild, arg1: java.lang.Object, arg2: java.lang.Class<unknown>, arg3: java.lang.Object, arg4: java.beans.beancontext.BeanContextServiceRevokedListener): java.lang.Object
        releaseService(arg0: java.beans.beancontext.BeanContextChild, arg1: java.lang.Object, arg2: java.lang.Object): void
        getCurrentServiceClasses(): java.util.Iterator<unknown>
        getCurrentServiceSelectors(arg0: java.lang.Class<unknown>): java.util.Iterator<unknown>
        addBeanContextServicesListener(arg0: java.beans.beancontext.BeanContextServicesListener): void
        removeBeanContextServicesListener(arg0: java.beans.beancontext.BeanContextServicesListener): void
      }

    }
  }
}
