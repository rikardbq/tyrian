declare namespace java {
  namespace sql {

    interface ResultSet extends java.sql.Wrapper, java.lang.AutoCloseable {
      public static readonly FETCH_FORWARD: int
      public static readonly FETCH_REVERSE: int
      public static readonly FETCH_UNKNOWN: int
      public static readonly TYPE_FORWARD_ONLY: int
      public static readonly TYPE_SCROLL_INSENSITIVE: int
      public static readonly TYPE_SCROLL_SENSITIVE: int
      public static readonly CONCUR_READ_ONLY: int
      public static readonly CONCUR_UPDATABLE: int
      public static readonly HOLD_CURSORS_OVER_COMMIT: int
      public static readonly CLOSE_CURSORS_AT_COMMIT: int
      next(): boolean
      close(): void
      wasNull(): boolean
      getString(arg0: int): java.lang.String
      getBoolean(arg0: int): boolean
      getByte(arg0: int): byte
      getShort(arg0: int): short
      getInt(arg0: int): int
      getLong(arg0: int): long
      getFloat(arg0: int): float
      getDouble(arg0: int): double
      getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
      getBytes(arg0: int): byte[]
      getDate(arg0: int): java.sql.Date
      getTime(arg0: int): java.sql.Time
      getTimestamp(arg0: int): java.sql.Timestamp
      getAsciiStream(arg0: int): java.io.InputStream
      getUnicodeStream(arg0: int): java.io.InputStream
      getBinaryStream(arg0: int): java.io.InputStream
      getString(arg0: java.lang.String): java.lang.String
      getBoolean(arg0: java.lang.String): boolean
      getByte(arg0: java.lang.String): byte
      getShort(arg0: java.lang.String): short
      getInt(arg0: java.lang.String): int
      getLong(arg0: java.lang.String): long
      getFloat(arg0: java.lang.String): float
      getDouble(arg0: java.lang.String): double
      getBigDecimal(arg0: java.lang.String, arg1: int): java.math.BigDecimal
      getBytes(arg0: java.lang.String): byte[]
      getDate(arg0: java.lang.String): java.sql.Date
      getTime(arg0: java.lang.String): java.sql.Time
      getTimestamp(arg0: java.lang.String): java.sql.Timestamp
      getAsciiStream(arg0: java.lang.String): java.io.InputStream
      getUnicodeStream(arg0: java.lang.String): java.io.InputStream
      getBinaryStream(arg0: java.lang.String): java.io.InputStream
      getWarnings(): java.sql.SQLWarning
      clearWarnings(): void
      getCursorName(): java.lang.String
      getMetaData(): java.sql.ResultSetMetaData
      getObject(arg0: int): java.lang.Object
      getObject(arg0: java.lang.String): java.lang.Object
      findColumn(arg0: java.lang.String): int
      getCharacterStream(arg0: int): java.io.Reader
      getCharacterStream(arg0: java.lang.String): java.io.Reader
      getBigDecimal(arg0: int): java.math.BigDecimal
      getBigDecimal(arg0: java.lang.String): java.math.BigDecimal
      isBeforeFirst(): boolean
      isAfterLast(): boolean
      isFirst(): boolean
      isLast(): boolean
      beforeFirst(): void
      afterLast(): void
      first(): boolean
      last(): boolean
      getRow(): int
      absolute(arg0: int): boolean
      relative(arg0: int): boolean
      previous(): boolean
      setFetchDirection(arg0: int): void
      getFetchDirection(): int
      setFetchSize(arg0: int): void
      getFetchSize(): int
      getType(): int
      getConcurrency(): int
      rowUpdated(): boolean
      rowInserted(): boolean
      rowDeleted(): boolean
      updateNull(arg0: int): void
      updateBoolean(arg0: int, arg1: boolean): void
      updateByte(arg0: int, arg1: byte): void
      updateShort(arg0: int, arg1: short): void
      updateInt(arg0: int, arg1: int): void
      updateLong(arg0: int, arg1: long): void
      updateFloat(arg0: int, arg1: float): void
      updateDouble(arg0: int, arg1: double): void
      updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
      updateString(arg0: int, arg1: java.lang.String): void
      updateBytes(arg0: int, arg1: byte[]): void
      updateDate(arg0: int, arg1: java.sql.Date): void
      updateTime(arg0: int, arg1: java.sql.Time): void
      updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
      updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
      updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
      updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
      updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
      updateObject(arg0: int, arg1: java.lang.Object): void
      updateNull(arg0: java.lang.String): void
      updateBoolean(arg0: java.lang.String, arg1: boolean): void
      updateByte(arg0: java.lang.String, arg1: byte): void
      updateShort(arg0: java.lang.String, arg1: short): void
      updateInt(arg0: java.lang.String, arg1: int): void
      updateLong(arg0: java.lang.String, arg1: long): void
      updateFloat(arg0: java.lang.String, arg1: float): void
      updateDouble(arg0: java.lang.String, arg1: double): void
      updateBigDecimal(arg0: java.lang.String, arg1: java.math.BigDecimal): void
      updateString(arg0: java.lang.String, arg1: java.lang.String): void
      updateBytes(arg0: java.lang.String, arg1: byte[]): void
      updateDate(arg0: java.lang.String, arg1: java.sql.Date): void
      updateTime(arg0: java.lang.String, arg1: java.sql.Time): void
      updateTimestamp(arg0: java.lang.String, arg1: java.sql.Timestamp): void
      updateAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
      updateBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
      updateCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: int): void
      updateObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: int): void
      updateObject(arg0: java.lang.String, arg1: java.lang.Object): void
      insertRow(): void
      updateRow(): void
      deleteRow(): void
      refreshRow(): void
      cancelRowUpdates(): void
      moveToInsertRow(): void
      moveToCurrentRow(): void
      getStatement(): java.sql.Statement
      getObject(arg0: int, arg1: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getRef(arg0: int): java.sql.Ref
      getBlob(arg0: int): java.sql.Blob
      getClob(arg0: int): java.sql.Clob
      getArray(arg0: int): java.sql.Array
      getObject(arg0: java.lang.String, arg1: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getRef(arg0: java.lang.String): java.sql.Ref
      getBlob(arg0: java.lang.String): java.sql.Blob
      getClob(arg0: java.lang.String): java.sql.Clob
      getArray(arg0: java.lang.String): java.sql.Array
      getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
      getDate(arg0: java.lang.String, arg1: java.util.Calendar): java.sql.Date
      getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
      getTime(arg0: java.lang.String, arg1: java.util.Calendar): java.sql.Time
      getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
      getTimestamp(arg0: java.lang.String, arg1: java.util.Calendar): java.sql.Timestamp
      getURL(arg0: int): java.net.URL
      getURL(arg0: java.lang.String): java.net.URL
      updateRef(arg0: int, arg1: java.sql.Ref): void
      updateRef(arg0: java.lang.String, arg1: java.sql.Ref): void
      updateBlob(arg0: int, arg1: java.sql.Blob): void
      updateBlob(arg0: java.lang.String, arg1: java.sql.Blob): void
      updateClob(arg0: int, arg1: java.sql.Clob): void
      updateClob(arg0: java.lang.String, arg1: java.sql.Clob): void
      updateArray(arg0: int, arg1: java.sql.Array): void
      updateArray(arg0: java.lang.String, arg1: java.sql.Array): void
      getRowId(arg0: int): java.sql.RowId
      getRowId(arg0: java.lang.String): java.sql.RowId
      updateRowId(arg0: int, arg1: java.sql.RowId): void
      updateRowId(arg0: java.lang.String, arg1: java.sql.RowId): void
      getHoldability(): int
      isClosed(): boolean
      updateNString(arg0: int, arg1: java.lang.String): void
      updateNString(arg0: java.lang.String, arg1: java.lang.String): void
      updateNClob(arg0: int, arg1: java.sql.NClob): void
      updateNClob(arg0: java.lang.String, arg1: java.sql.NClob): void
      getNClob(arg0: int): java.sql.NClob
      getNClob(arg0: java.lang.String): java.sql.NClob
      getSQLXML(arg0: int): java.sql.SQLXML
      getSQLXML(arg0: java.lang.String): java.sql.SQLXML
      updateSQLXML(arg0: int, arg1: java.sql.SQLXML): void
      updateSQLXML(arg0: java.lang.String, arg1: java.sql.SQLXML): void
      getNString(arg0: int): java.lang.String
      getNString(arg0: java.lang.String): java.lang.String
      getNCharacterStream(arg0: int): java.io.Reader
      getNCharacterStream(arg0: java.lang.String): java.io.Reader
      updateNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
      updateNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
      updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
      updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
      updateAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
      updateBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
      updateCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      updateBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
      updateBlob(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
      updateClob(arg0: int, arg1: java.io.Reader, arg2: long): void
      updateClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      updateNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
      updateNClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      updateNCharacterStream(arg0: int, arg1: java.io.Reader): void
      updateNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
      updateAsciiStream(arg0: int, arg1: java.io.InputStream): void
      updateBinaryStream(arg0: int, arg1: java.io.InputStream): void
      updateCharacterStream(arg0: int, arg1: java.io.Reader): void
      updateAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream): void
      updateBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream): void
      updateCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
      updateBlob(arg0: int, arg1: java.io.InputStream): void
      updateBlob(arg0: java.lang.String, arg1: java.io.InputStream): void
      updateClob(arg0: int, arg1: java.io.Reader): void
      updateClob(arg0: java.lang.String, arg1: java.io.Reader): void
      updateNClob(arg0: int, arg1: java.io.Reader): void
      updateNClob(arg0: java.lang.String, arg1: java.io.Reader): void
      getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
      getObject<T>(arg0: java.lang.String, arg1: java.lang.Class<T>): T
      updateObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
      updateObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
      updateObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType): void
      updateObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.sql.SQLType): void
    }

  }
}
