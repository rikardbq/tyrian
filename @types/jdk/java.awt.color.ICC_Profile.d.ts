declare namespace java {
  namespace awt {
    namespace color {

      class ICC_Profile implements java.io.Serializable {

        public static readonly CLASS_INPUT: int
        public static readonly CLASS_DISPLAY: int
        public static readonly CLASS_OUTPUT: int
        public static readonly CLASS_DEVICELINK: int
        public static readonly CLASS_COLORSPACECONVERSION: int
        public static readonly CLASS_ABSTRACT: int
        public static readonly CLASS_NAMEDCOLOR: int
        public static readonly icSigXYZData: int
        public static readonly icSigLabData: int
        public static readonly icSigLuvData: int
        public static readonly icSigYCbCrData: int
        public static readonly icSigYxyData: int
        public static readonly icSigRgbData: int
        public static readonly icSigGrayData: int
        public static readonly icSigHsvData: int
        public static readonly icSigHlsData: int
        public static readonly icSigCmykData: int
        public static readonly icSigCmyData: int
        public static readonly icSigSpace2CLR: int
        public static readonly icSigSpace3CLR: int
        public static readonly icSigSpace4CLR: int
        public static readonly icSigSpace5CLR: int
        public static readonly icSigSpace6CLR: int
        public static readonly icSigSpace7CLR: int
        public static readonly icSigSpace8CLR: int
        public static readonly icSigSpace9CLR: int
        public static readonly icSigSpaceACLR: int
        public static readonly icSigSpaceBCLR: int
        public static readonly icSigSpaceCCLR: int
        public static readonly icSigSpaceDCLR: int
        public static readonly icSigSpaceECLR: int
        public static readonly icSigSpaceFCLR: int
        public static readonly icSigInputClass: int
        public static readonly icSigDisplayClass: int
        public static readonly icSigOutputClass: int
        public static readonly icSigLinkClass: int
        public static readonly icSigAbstractClass: int
        public static readonly icSigColorSpaceClass: int
        public static readonly icSigNamedColorClass: int
        public static readonly icPerceptual: int
        public static readonly icRelativeColorimetric: int
        public static readonly icMediaRelativeColorimetric: int
        public static readonly icSaturation: int
        public static readonly icAbsoluteColorimetric: int
        public static readonly icICCAbsoluteColorimetric: int
        public static readonly icSigHead: int
        public static readonly icSigAToB0Tag: int
        public static readonly icSigAToB1Tag: int
        public static readonly icSigAToB2Tag: int
        public static readonly icSigBlueColorantTag: int
        public static readonly icSigBlueMatrixColumnTag: int
        public static readonly icSigBlueTRCTag: int
        public static readonly icSigBToA0Tag: int
        public static readonly icSigBToA1Tag: int
        public static readonly icSigBToA2Tag: int
        public static readonly icSigCalibrationDateTimeTag: int
        public static readonly icSigCharTargetTag: int
        public static readonly icSigCopyrightTag: int
        public static readonly icSigCrdInfoTag: int
        public static readonly icSigDeviceMfgDescTag: int
        public static readonly icSigDeviceModelDescTag: int
        public static readonly icSigDeviceSettingsTag: int
        public static readonly icSigGamutTag: int
        public static readonly icSigGrayTRCTag: int
        public static readonly icSigGreenColorantTag: int
        public static readonly icSigGreenMatrixColumnTag: int
        public static readonly icSigGreenTRCTag: int
        public static readonly icSigLuminanceTag: int
        public static readonly icSigMeasurementTag: int
        public static readonly icSigMediaBlackPointTag: int
        public static readonly icSigMediaWhitePointTag: int
        public static readonly icSigNamedColor2Tag: int
        public static readonly icSigOutputResponseTag: int
        public static readonly icSigPreview0Tag: int
        public static readonly icSigPreview1Tag: int
        public static readonly icSigPreview2Tag: int
        public static readonly icSigProfileDescriptionTag: int
        public static readonly icSigProfileSequenceDescTag: int
        public static readonly icSigPs2CRD0Tag: int
        public static readonly icSigPs2CRD1Tag: int
        public static readonly icSigPs2CRD2Tag: int
        public static readonly icSigPs2CRD3Tag: int
        public static readonly icSigPs2CSATag: int
        public static readonly icSigPs2RenderingIntentTag: int
        public static readonly icSigRedColorantTag: int
        public static readonly icSigRedMatrixColumnTag: int
        public static readonly icSigRedTRCTag: int
        public static readonly icSigScreeningDescTag: int
        public static readonly icSigScreeningTag: int
        public static readonly icSigTechnologyTag: int
        public static readonly icSigUcrBgTag: int
        public static readonly icSigViewingCondDescTag: int
        public static readonly icSigViewingConditionsTag: int
        public static readonly icSigChromaticityTag: int
        public static readonly icSigChromaticAdaptationTag: int
        public static readonly icSigColorantOrderTag: int
        public static readonly icSigColorantTableTag: int
        public static readonly icHdrSize: int
        public static readonly icHdrCmmId: int
        public static readonly icHdrVersion: int
        public static readonly icHdrDeviceClass: int
        public static readonly icHdrColorSpace: int
        public static readonly icHdrPcs: int
        public static readonly icHdrDate: int
        public static readonly icHdrMagic: int
        public static readonly icHdrPlatform: int
        public static readonly icHdrFlags: int
        public static readonly icHdrManufacturer: int
        public static readonly icHdrModel: int
        public static readonly icHdrAttributes: int
        public static readonly icHdrRenderingIntent: int
        public static readonly icHdrIlluminant: int
        public static readonly icHdrCreator: int
        public static readonly icHdrProfileID: int
        public static readonly icTagType: int
        public static readonly icTagReserved: int
        public static readonly icCurveCount: int
        public static readonly icCurveData: int
        public static readonly icXYZNumberX: int
        constructor(arg0: sun.java2d.cmm.Profile)
        constructor(arg0: sun.java2d.cmm.ProfileDeferralInfo)
        protected finalize(): void
        public static getInstance(arg0: byte[]): java.awt.color.ICC_Profile
        public static getInstance(arg0: int): java.awt.color.ICC_Profile
        public static getInstance(arg0: java.lang.String): java.awt.color.ICC_Profile
        public static getInstance(arg0: java.io.InputStream): java.awt.color.ICC_Profile
        static getProfileDataFromStream(arg0: java.io.InputStream): byte[]
        static getDeferredInstance(arg0: sun.java2d.cmm.ProfileDeferralInfo): java.awt.color.ICC_Profile
        activateDeferredProfile(): void
        public getMajorVersion(): int
        public getMinorVersion(): int
        public getProfileClass(): int
        public getColorSpaceType(): int
        static getColorSpaceType(arg0: sun.java2d.cmm.Profile): int
        public getPCSType(): int
        static getPCSType(arg0: sun.java2d.cmm.Profile): int
        public write(arg0: java.lang.String): void
        public write(arg0: java.io.OutputStream): void
        public getData(): byte[]
        public getData(arg0: int): byte[]
        static getData(arg0: sun.java2d.cmm.Profile, arg1: int): byte[]
        public setData(arg0: int, arg1: byte[]): void
        setRenderingIntent(arg0: int): void
        getRenderingIntent(): int
        public getNumComponents(): int
        getMediaWhitePoint(): float[]
        getXYZTag(arg0: int): float[]
        getGamma(arg0: int): float
        getTRC(arg0: int): short[]
        static iccCStoJCS(arg0: int): int
        static intFromBigEndian(arg0: byte[], arg1: int): int
        static intToBigEndian(arg0: int, arg1: byte[], arg2: int): void
        static shortFromBigEndian(arg0: byte[], arg1: int): short
        static shortToBigEndian(arg0: short, arg1: byte[], arg2: int): void
        protected readResolve(): java.lang.Object
      }

    }
  }
}
