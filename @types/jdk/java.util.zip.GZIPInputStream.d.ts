declare namespace java {
  namespace util {
    namespace zip {

      class GZIPInputStream extends java.util.zip.InflaterInputStream {

        protected crc: java.util.zip.CRC32
        protected eos: boolean
        public static readonly GZIP_MAGIC: int
        public constructor(arg0: java.io.InputStream, arg1: int)
        public constructor(arg0: java.io.InputStream)
        public read(arg0: byte[], arg1: int, arg2: int): int
        public close(): void
      }

    }
  }
}
