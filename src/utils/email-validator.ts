import { EmailValidator } from '../presentation/protocols/emai-validator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
