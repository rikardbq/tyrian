declare namespace java {
  namespace security {
    namespace interfaces {

      interface RSAPublicKey extends java.security.PublicKey, java.security.interfaces.RSAKey {
        public static readonly serialVersionUID: long
        getPublicExponent(): java.math.BigInteger
      }

    }
  }
}
