import produce from 'immer';
import { notifyDanger } from '../../toasts'
import { _sel_languageSelectGetText_in } from '../../language/selectors'
// support: set types
// set actions (later)
import { SIGNUP_CHANGE_EMAIL, SIGNUP_CHANGE_PASSWORD, SIGNUP_CHANGE_CONFIRMPASSWORD, SIGNUP_REGISTER_NEWUSER } from './types'
// reducer: immer

export const initialState = {
  newUser: {
    email: '',
    isEmailError: undefined,
    password: '',
    isPasswordError: undefined,
    confirmPassword: '',
    isConfirmPasswordError: undefined,
    isCallingApi: false,
  },
}

export const signupReducer = (state = initialState, action, { language }) => {

  return produce(state, (draft) => {
    switch (action.type) {
      case SIGNUP_CHANGE_EMAIL:
        // demo

        const newEmail = action.payload
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        draft.newUser = {
          ...draft.newUser, email: newEmail,
          isEmailError: !regexEmail.test(newEmail)
        }
        break;

      case SIGNUP_CHANGE_PASSWORD:
        const newPassword = action.payload
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        draft.newUser = {
          ...draft.newUser,
          isConfirmPasswordError: draft.newUser.isConfirmPasswordError === undefined ? undefined : draft.newUser.confirmPassword !== newPassword,
          password: newPassword,
          isPasswordError: !regexPassword.test(newPassword)
        } // set isConfirmPasswordError for some found bug
        break;

      case SIGNUP_CHANGE_CONFIRMPASSWORD:
        const newConfirmPassword = action.payload
        draft.newUser = {
          ...draft.newUser,
          confirmPassword: newConfirmPassword,
          isConfirmPasswordError: newConfirmPassword !== draft.newUser.password
        };
        break;

      case SIGNUP_REGISTER_NEWUSER: {
        const getText = language.getText.bind(language)
        // check valid
        const { isEmailError, isPasswordError, isConfirmPasswordError } = draft.newUser
        if (isEmailError || isEmailError === undefined) {
          notifyDanger(getText('email-constraint'))
          break;
        }
        if (isPasswordError || isPasswordError === undefined) {
          notifyDanger(getText('password-constraint'))
          break;
        }
        if (isConfirmPasswordError || isConfirmPasswordError === undefined) {
          notifyDanger(getText('confirm-password-constraint'))
          break;
        }
        // set calling api
        draft.newUser.isCallingApi = true;
        break;
      }
      default:
        break;
    }
  })
}
