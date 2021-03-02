declare namespace java {
  namespace net {

    class InetSocketAddress extends java.net.SocketAddress {
      public constructor(arg0: int)
      public constructor(arg0: java.net.InetAddress, arg1: int)
      public constructor(arg0: java.lang.String, arg1: int)
      public static createUnresolved(arg0: java.lang.String, arg1: int): java.net.InetSocketAddress
      public getPort(): int
      public getAddress(): java.net.InetAddress
      public getHostName(): java.lang.String
      public getHostString(): java.lang.String
      public isUnresolved(): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}
