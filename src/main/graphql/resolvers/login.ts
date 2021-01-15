import { makeLoginController, makeSignUpController } from '@/main/factories'
import { adaptResolver } from '@/main/adapters'

export default {
  Query: {
    login: async (parent: any, args: any) => adaptResolver(makeLoginController(), args)
  },

  Mutation: {
    signUp: async (parent: any, args: any) => adaptResolver(makeSignUpController(), args)
  }
}
