declare namespace javax {
  namespace management {
    namespace timer {

      interface TimerMBean {
        start(): void
        stop(): void
        addNotification(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long, arg6: boolean): java.lang.Integer
        addNotification(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long): java.lang.Integer
        addNotification(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object, arg3: java.util.Date, arg4: long): java.lang.Integer
        addNotification(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object, arg3: java.util.Date): java.lang.Integer
        removeNotification(arg0: java.lang.Integer): void
        removeNotifications(arg0: java.lang.String): void
        removeAllNotifications(): void
        getNbNotifications(): int
        getAllNotificationIDs(): java.util.Vector<java.lang.Integer>
        getNotificationIDs(arg0: java.lang.String): java.util.Vector<java.lang.Integer>
        getNotificationType(arg0: java.lang.Integer): java.lang.String
        getNotificationMessage(arg0: java.lang.Integer): java.lang.String
        getNotificationUserData(arg0: java.lang.Integer): java.lang.Object
        getDate(arg0: java.lang.Integer): java.util.Date
        getPeriod(arg0: java.lang.Integer): java.lang.Long
        getNbOccurences(arg0: java.lang.Integer): java.lang.Long
        getFixedRate(arg0: java.lang.Integer): java.lang.Boolean
        getSendPastNotifications(): boolean
        setSendPastNotifications(arg0: boolean): void
        isActive(): boolean
        isEmpty(): boolean
      }

    }
  }
}
