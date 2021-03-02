declare namespace java {
  namespace util {

    class GregorianCalendar extends java.util.Calendar {
      public static readonly BC: int
      static readonly BCE: int
      public static readonly AD: int
      static readonly CE: int
      static readonly MONTH_LENGTH: int[]
      static readonly LEAP_MONTH_LENGTH: int[]
      static readonly MIN_VALUES: int[]
      static readonly LEAST_MAX_VALUES: int[]
      static readonly MAX_VALUES: int[]
      static readonly serialVersionUID: long
      static readonly DEFAULT_GREGORIAN_CUTOVER: long
      static readonly $assertionsDisabled: boolean
      public constructor()
      public constructor(arg0: java.util.TimeZone)
      public constructor(arg0: java.util.Locale)
      public constructor(arg0: java.util.TimeZone, arg1: java.util.Locale)
      public constructor(arg0: int, arg1: int, arg2: int)
      public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
      public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
      constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int)
      constructor(arg0: java.util.TimeZone, arg1: java.util.Locale, arg2: boolean)
      public setGregorianChange(arg0: java.util.Date): void
      public getGregorianChange(): java.util.Date
      public isLeapYear(arg0: int): boolean
      public getCalendarType(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public add(arg0: int, arg1: int): void
      public roll(arg0: int, arg1: boolean): void
      public roll(arg0: int, arg1: int): void
      public getMinimum(arg0: int): int
      public getMaximum(arg0: int): int
      public getGreatestMinimum(arg0: int): int
      public getLeastMaximum(arg0: int): int
      public getActualMinimum(arg0: int): int
      public getActualMaximum(arg0: int): int
      public clone(): java.lang.Object
      public getTimeZone(): java.util.TimeZone
      public setTimeZone(arg0: java.util.TimeZone): void
      public isWeekDateSupported(): boolean
      public getWeekYear(): int
      public setWeekDate(arg0: int, arg1: int, arg2: int): void
      public getWeeksInWeekYear(): int
      protected computeFields(): void
      protected computeTime(): void
      public toZonedDateTime(): java.time.ZonedDateTime
      public static from(arg0: java.time.ZonedDateTime): java.util.GregorianCalendar
    }

  }
}
