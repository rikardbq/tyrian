declare namespace java {
  namespace rmi {
    namespace server {

      abstract class RMISocketFactory implements java.rmi.server.RMIClientSocketFactory, java.rmi.server.RMIServerSocketFactory {
        public constructor()
        public abstract createSocket(arg0: java.lang.String, arg1: int): java.net.Socket
        public abstract createServerSocket(arg0: int): java.net.ServerSocket
        public static setSocketFactory(arg0: java.rmi.server.RMISocketFactory): void
        public static getSocketFactory(): java.rmi.server.RMISocketFactory
        public static getDefaultSocketFactory(): java.rmi.server.RMISocketFactory
        public static setFailureHandler(arg0: java.rmi.server.RMIFailureHandler): void
        public static getFailureHandler(): java.rmi.server.RMIFailureHandler
      }

    }
  }
}
