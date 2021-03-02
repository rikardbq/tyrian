declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        abstract class AbstractQueuedSynchronizer extends java.util.concurrent.locks.AbstractOwnableSynchronizer implements java.io.Serializable {
          static readonly SPIN_FOR_TIMEOUT_THRESHOLD: long
          protected constructor()
          protected getState(): int
          protected setState(arg0: int): void
          protected compareAndSetState(arg0: int, arg1: int): boolean
          static selfInterrupt(): void
          acquireQueued(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node, arg1: int): boolean
          protected tryAcquire(arg0: int): boolean
          protected tryRelease(arg0: int): boolean
          protected tryAcquireShared(arg0: int): int
          protected tryReleaseShared(arg0: int): boolean
          protected isHeldExclusively(): boolean
          public acquire(arg0: int): void
          public acquireInterruptibly(arg0: int): void
          public tryAcquireNanos(arg0: int, arg1: long): boolean
          public release(arg0: int): boolean
          public acquireShared(arg0: int): void
          public acquireSharedInterruptibly(arg0: int): void
          public tryAcquireSharedNanos(arg0: int, arg1: long): boolean
          public releaseShared(arg0: int): boolean
          public hasQueuedThreads(): boolean
          public hasContended(): boolean
          public getFirstQueuedThread(): java.lang.Thread
          public isQueued(arg0: java.lang.Thread): boolean
          apparentlyFirstQueuedIsExclusive(): boolean
          public hasQueuedPredecessors(): boolean
          public getQueueLength(): int
          public getQueuedThreads(): java.util.Collection<java.lang.Thread>
          public getExclusiveQueuedThreads(): java.util.Collection<java.lang.Thread>
          public getSharedQueuedThreads(): java.util.Collection<java.lang.Thread>
          public toString(): java.lang.String
          isOnSyncQueue(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          transferForSignal(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          transferAfterCancelledWait(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): boolean
          fullyRelease(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$Node): int
          public owns(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject): boolean
          public hasWaiters(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject): boolean
          public getWaitQueueLength(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject): int
          public getWaitingThreads(arg0: java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject): java.util.Collection<java.lang.Thread>
        }

      }
    }
  }
}
