declare namespace java {
  namespace util {

    class SimpleTimeZone extends java.util.TimeZone {
      public static readonly WALL_TIME: int
      public static readonly STANDARD_TIME: int
      public static readonly UTC_TIME: int
      static readonly serialVersionUID: long
      static readonly currentSerialVersion: int
      public constructor(arg0: int, arg1: java.lang.String)
      public constructor(arg0: int, arg1: java.lang.String, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int)
      public constructor(arg0: int, arg1: java.lang.String, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int)
      public constructor(arg0: int, arg1: java.lang.String, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: int, arg12: int)
      public setStartYear(arg0: int): void
      public setStartRule(arg0: int, arg1: int, arg2: int, arg3: int): void
      public setStartRule(arg0: int, arg1: int, arg2: int): void
      public setStartRule(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
      public setEndRule(arg0: int, arg1: int, arg2: int, arg3: int): void
      public setEndRule(arg0: int, arg1: int, arg2: int): void
      public setEndRule(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
      public getOffset(arg0: long): int
      getOffsets(arg0: long, arg1: int[]): int
      public getOffset(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): int
      public getRawOffset(): int
      public setRawOffset(arg0: int): void
      public setDSTSavings(arg0: int): void
      public getDSTSavings(): int
      public useDaylightTime(): boolean
      public observesDaylightTime(): boolean
      public inDaylightTime(arg0: java.util.Date): boolean
      public clone(): java.lang.Object
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public hasSameRules(arg0: java.util.TimeZone): boolean
      public toString(): java.lang.String
    }

  }
}
