declare namespace java {
  namespace rmi {
    namespace server {

      class UnicastRemoteObject extends java.rmi.server.RemoteServer {
        protected constructor()
        protected constructor(arg0: int)
        protected constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory, arg2: java.rmi.server.RMIServerSocketFactory)
        public clone(): java.lang.Object
        public static exportObject(arg0: java.rmi.Remote): java.rmi.server.RemoteStub
        public static exportObject(arg0: java.rmi.Remote, arg1: int): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory, arg3: java.rmi.server.RMIServerSocketFactory): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: int, arg2: java.io.ObjectInputFilter): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory, arg3: java.rmi.server.RMIServerSocketFactory, arg4: java.io.ObjectInputFilter): java.rmi.Remote
        public static unexportObject(arg0: java.rmi.Remote, arg1: boolean): boolean
      }

    }
  }
}
