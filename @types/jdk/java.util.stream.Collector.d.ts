declare namespace java {
  namespace util {
    namespace stream {

      interface Collector<T,A,R> {
        supplier(): java.util.function$.Supplier<A>
        accumulator(): java.util.function$.BiConsumer<A,T>
        combiner(): java.util.function$.BinaryOperator<A>
        finisher(): java.util.function$.Function<A,R>
        characteristics(): java.util.Set<java.util.stream.Collector$Characteristics>
        of<T,R>(arg0: java.util.function$.Supplier<R>, arg1: java.util.function$.BiConsumer<R,T>, arg2: java.util.function$.BinaryOperator<R>, ...arg3: java.util.stream.Collector$Characteristics[]): java.util.stream.Collector<T,R,R>
        of<T,A,R>(arg0: java.util.function$.Supplier<A>, arg1: java.util.function$.BiConsumer<A,T>, arg2: java.util.function$.BinaryOperator<A>, arg3: java.util.function$.Function<A,R>, ...arg4: java.util.stream.Collector$Characteristics[]): java.util.stream.Collector<T,A,R>
      }

    }
  }
}
