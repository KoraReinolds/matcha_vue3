
const loginFields = ['firstName', 'lastName'] as const

const registrationFields = ['firstName', 'lastName', 'email'] as const

export type RegistrationFormFields = {
  [key in typeof registrationFields[number]]: string
}

export type LoginFormFields = {
  [key in typeof loginFields[number]]: string
}

interface Form {
  component: 'TextField',
  label: string,
  placeholder: string,
  // validations?: Object,
}

interface LoginFormField extends Form {
  key: typeof loginFields[number],
}

interface RegistrationFormField extends Form {
  key: typeof registrationFields[number],
}

export type LoginForm = LoginFormField[]

export type RegistrationForm = RegistrationFormField[]

export type PossibleFields = typeof loginFields[number] | typeof registrationFields[number]
