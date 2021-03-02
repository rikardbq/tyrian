declare namespace java {
  namespace security {

    abstract class KeyPairGeneratorSpi {
      public constructor()
      public abstract initialize(arg0: int, arg1: java.security.SecureRandom): void
      public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      public abstract generateKeyPair(): java.security.KeyPair
    }

  }
}
