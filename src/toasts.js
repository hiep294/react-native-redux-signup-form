import { Toast } from "native-base";
import { locale, initialState as language } from './language/reducer'

export const notifyDanger = (message) => Toast.show({
  text: message,
  buttonText: language[locale]['ok'],
  duration: 3000,
  type: 'danger'
})
