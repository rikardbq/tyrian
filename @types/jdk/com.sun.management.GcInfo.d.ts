declare namespace com {
  namespace sun {
    namespace management {

      class GcInfo implements javax.management.openmbean.CompositeData, javax.management.openmbean.CompositeDataView {
        public getId(): long
        public getStartTime(): long
        public getEndTime(): long
        public getDuration(): long
        public getMemoryUsageBeforeGc(): java.util.Map<java.lang.String,java.lang.management.MemoryUsage>
        public getMemoryUsageAfterGc(): java.util.Map<java.lang.String,java.lang.management.MemoryUsage>
        public static from(arg0: javax.management.openmbean.CompositeData): com.sun.management.GcInfo
        public containsKey(arg0: java.lang.String): boolean
        public containsValue(arg0: java.lang.Object): boolean
        public equals(arg0: java.lang.Object): boolean
        public get(arg0: java.lang.String): java.lang.Object
        public getAll(arg0: java.lang.String[]): java.lang.Object[]
        public getCompositeType(): javax.management.openmbean.CompositeType
        public hashCode(): int
        public toString(): java.lang.String
        public values(): java.util.Collection<unknown>
        public toCompositeData(arg0: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData
      }

    }
  }
}
