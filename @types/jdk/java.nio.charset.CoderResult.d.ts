declare namespace java {
  namespace nio {
    namespace charset {

      class CoderResult {
        public static readonly UNDERFLOW: java.nio.charset.CoderResult
        public static readonly OVERFLOW: java.nio.charset.CoderResult
        static readonly $assertionsDisabled: boolean
        public toString(): java.lang.String
        public isUnderflow(): boolean
        public isOverflow(): boolean
        public isError(): boolean
        public isMalformed(): boolean
        public isUnmappable(): boolean
        public length(): int
        public static malformedForLength(arg0: int): java.nio.charset.CoderResult
        public static unmappableForLength(arg0: int): java.nio.charset.CoderResult
        public throwException(): void
      }

    }
  }
}
