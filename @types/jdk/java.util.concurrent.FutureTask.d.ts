declare namespace java {
  namespace util {
    namespace concurrent {

      class FutureTask<V> implements java.util.concurrent.RunnableFuture<V> {
        public constructor(arg0: java.util.concurrent.Callable<V>)
        public constructor(arg0: java.lang.Runnable, arg1: V)
        public isCancelled(): boolean
        public isDone(): boolean
        public cancel(arg0: boolean): boolean
        public get(): V
        public get(arg0: long, arg1: java.util.concurrent.TimeUnit): V
        protected done(): void
        protected set(arg0: V): void
        protected setException(arg0: java.lang.Throwable): void
        public run(): void
        protected runAndReset(): boolean
        public toString(): java.lang.String
      }

    }
  }
}
