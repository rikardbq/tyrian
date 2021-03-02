declare namespace javax {
  namespace sound {
    namespace midi {

      class Sequence {
        public static readonly PPQ: float
        public static readonly SMPTE_24: float
        public static readonly SMPTE_25: float
        public static readonly SMPTE_30DROP: float
        public static readonly SMPTE_30: float
        protected divisionType: float
        protected resolution: int
        protected tracks: java.util.Vector<javax.sound.midi.Track>
        public constructor(arg0: float, arg1: int)
        public constructor(arg0: float, arg1: int, arg2: int)
        public getDivisionType(): float
        public getResolution(): int
        public createTrack(): javax.sound.midi.Track
        public deleteTrack(arg0: javax.sound.midi.Track): boolean
        public getTracks(): javax.sound.midi.Track[]
        public getMicrosecondLength(): long
        public getTickLength(): long
        public getPatchList(): javax.sound.midi.Patch[]
      }

    }
  }
}
