declare namespace java {
  namespace util {

    class UUID implements java.io.Serializable, java.lang.Comparable<java.util.UUID> {
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: long, arg1: long)
      public static randomUUID(): java.util.UUID
      public static nameUUIDFromBytes(arg0: byte[]): java.util.UUID
      public static fromString(arg0: java.lang.String): java.util.UUID
      public getLeastSignificantBits(): long
      public getMostSignificantBits(): long
      public version(): int
      public variant(): int
      public timestamp(): long
      public clockSequence(): int
      public node(): long
      public toString(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.util.UUID): int
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
