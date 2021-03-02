declare namespace java {
  namespace time {

    class YearMonth implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.YearMonth>, java.io.Serializable {
      public static now(): java.time.YearMonth
      public static now(arg0: java.time.ZoneId): java.time.YearMonth
      public static now(arg0: java.time.Clock): java.time.YearMonth
      public static of(arg0: int, arg1: java.time.Month): java.time.YearMonth
      public static of(arg0: int, arg1: int): java.time.YearMonth
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.YearMonth
      public static parse(arg0: java.lang.CharSequence): java.time.YearMonth
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.YearMonth
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public getYear(): int
      public getMonthValue(): int
      public getMonth(): java.time.Month
      public isLeapYear(): boolean
      public isValidDay(arg0: int): boolean
      public lengthOfMonth(): int
      public lengthOfYear(): int
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.YearMonth
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.YearMonth
      public withYear(arg0: int): java.time.YearMonth
      public withMonth(arg0: int): java.time.YearMonth
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.YearMonth
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.YearMonth
      public plusYears(arg0: long): java.time.YearMonth
      public plusMonths(arg0: long): java.time.YearMonth
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.YearMonth
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.YearMonth
      public minusYears(arg0: long): java.time.YearMonth
      public minusMonths(arg0: long): java.time.YearMonth
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atDay(arg0: int): java.time.LocalDate
      public atEndOfMonth(): java.time.LocalDate
      public compareTo(arg0: java.time.YearMonth): int
      public isAfter(arg0: java.time.YearMonth): boolean
      public isBefore(arg0: java.time.YearMonth): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.YearMonth
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.temporal.Temporal
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
