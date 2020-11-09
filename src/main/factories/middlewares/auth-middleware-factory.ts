import { makeDbLoadAccountByToken } from '../usecases/account/load-account-by-token/db-load-acount-by-token-factory'
import { Middleware } from '@/presentation/protocols/middleware'
import { AuthMiddleware } from '@/presentation/middlewares/auth-middleware'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
