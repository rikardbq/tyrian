declare namespace java {
  namespace io {

    class ByteArrayInputStream extends java.io.InputStream {

      protected buf: byte[]
      protected pos: int
      protected mark: int
      protected count: int
      public constructor(arg0: byte[])
      public constructor(arg0: byte[], arg1: int, arg2: int)
      public read(): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public readAllBytes(): byte[]
      public readNBytes(arg0: byte[], arg1: int, arg2: int): int
      public transferTo(arg0: java.io.OutputStream): long
      public skip(arg0: long): long
      public available(): int
      public markSupported(): boolean
      public mark(arg0: int): void
      public reset(): void
      public close(): void
    }

  }
}
