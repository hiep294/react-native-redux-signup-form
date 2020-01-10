import { initialState } from './reducer'
const getDomain = (state) => state.signupScreen || initialState

export const _sel_signUpSelectNewUser_in = (state) => getDomain(state)['newUser']
