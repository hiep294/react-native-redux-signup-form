import { signupReducer } from './screens/SignupScreen/reducer'
import { languageReducer } from './language/reducer'

const rootReducer = (state = {}, action) => ({
  signupScreen: signupReducer(state.signupScreen, action, state),
  language: languageReducer(state.language, action),
})

export default rootReducer
