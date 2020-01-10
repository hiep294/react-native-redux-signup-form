import { SIGNUP_CHANGE_EMAIL, SIGNUP_CHANGE_PASSWORD, SIGNUP_CHANGE_CONFIRMPASSWORD, SIGNUP_REGISTER_NEWUSER } from './types';

export const _act_signUpChangeEmail_with = (newEmail) => ({
  type: SIGNUP_CHANGE_EMAIL,
  payload: newEmail,
})

export const _act_signUpChangePassword_with = (newPassword) => ({
  type: SIGNUP_CHANGE_PASSWORD,
  payload: newPassword,
})


export const _act_signUpChangeConfirmPassword_with = (newConfirmPassword) => ({
  type: SIGNUP_CHANGE_CONFIRMPASSWORD,
  payload: newConfirmPassword,
})

export const _act_signUpRegisterNewUser = () => ({
  type: SIGNUP_REGISTER_NEWUSER
})
