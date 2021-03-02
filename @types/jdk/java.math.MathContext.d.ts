declare namespace java {
  namespace math {

    class MathContext implements java.io.Serializable {
      public static readonly UNLIMITED: java.math.MathContext
      public static readonly DECIMAL32: java.math.MathContext
      public static readonly DECIMAL64: java.math.MathContext
      public static readonly DECIMAL128: java.math.MathContext
      readonly precision: int
      readonly roundingMode: java.math.RoundingMode
      public constructor(arg0: int)
      public constructor(arg0: int, arg1: java.math.RoundingMode)
      public constructor(arg0: java.lang.String)
      public getPrecision(): int
      public getRoundingMode(): java.math.RoundingMode
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
