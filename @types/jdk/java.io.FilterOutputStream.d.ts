declare namespace java {
  namespace io {

    class FilterOutputStream extends java.io.OutputStream {
      protected out: java.io.OutputStream
      public constructor(arg0: java.io.OutputStream)
      public write(arg0: int): void
      public write(arg0: byte[]): void
      public write(arg0: byte[], arg1: int, arg2: int): void
      public flush(): void
      public close(): void
    }

  }
}
