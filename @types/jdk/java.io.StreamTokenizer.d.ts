declare namespace java {
  namespace io {

    class StreamTokenizer {
      public ttype: int
      public static readonly TT_EOF: int
      public static readonly TT_EOL: int
      public static readonly TT_NUMBER: int
      public static readonly TT_WORD: int
      public sval: java.lang.String
      public nval: double
      public constructor(arg0: java.io.InputStream)
      public constructor(arg0: java.io.Reader)
      public resetSyntax(): void
      public wordChars(arg0: int, arg1: int): void
      public whitespaceChars(arg0: int, arg1: int): void
      public ordinaryChars(arg0: int, arg1: int): void
      public ordinaryChar(arg0: int): void
      public commentChar(arg0: int): void
      public quoteChar(arg0: int): void
      public parseNumbers(): void
      public eolIsSignificant(arg0: boolean): void
      public slashStarComments(arg0: boolean): void
      public slashSlashComments(arg0: boolean): void
      public lowerCaseMode(arg0: boolean): void
      public nextToken(): int
      public pushBack(): void
      public lineno(): int
      public toString(): java.lang.String
    }

  }
}
