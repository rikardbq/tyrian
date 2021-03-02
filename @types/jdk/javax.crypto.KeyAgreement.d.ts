declare namespace javax {
  namespace crypto {

    class KeyAgreement {
      protected constructor(arg0: javax.crypto.KeyAgreementSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public getAlgorithm(): java.lang.String
      public static getInstance(arg0: java.lang.String): javax.crypto.KeyAgreement
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): javax.crypto.KeyAgreement
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): javax.crypto.KeyAgreement
      chooseFirstProvider(): void
      public getProvider(): java.security.Provider
      public init(arg0: java.security.Key): void
      public init(arg0: java.security.Key, arg1: java.security.SecureRandom): void
      public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
      public doPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
      public generateSecret(): byte[]
      public generateSecret(arg0: byte[], arg1: int): int
      public generateSecret(arg0: java.lang.String): javax.crypto.SecretKey
    }

  }
}
