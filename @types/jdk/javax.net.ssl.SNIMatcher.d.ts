declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class SNIMatcher {

        protected constructor(arg0: int)
        public readonly getType(): int
        public abstract matches(arg0: javax.net.ssl.SNIServerName): boolean
      }

    }
  }
}
