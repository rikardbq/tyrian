declare namespace java {
  namespace util {
    namespace concurrent {
      namespace atomic {

        class DoubleAccumulator extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {

          public constructor(arg0: java.util.function$.DoubleBinaryOperator, arg1: double)
          public accumulate(arg0: double): void
          public get(): double
          public reset(): void
          public getThenReset(): double
          public toString(): java.lang.String
          public doubleValue(): double
          public longValue(): long
          public intValue(): int
          public floatValue(): float
        }

      }
    }
  }
}
