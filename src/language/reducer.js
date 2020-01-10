import produce from 'immer';
import en from './locales/en'
import vi from './locales/vi'
import { CHANGE_LANGUAGE } from './types'
import { EN, VI } from './localeList'

export const initialState = {
  locale: EN,
  getText(key) {
    return this[this.locale][key]
  }
}
initialState[EN] = en
initialState[VI] = vi

export let locale = initialState.locale

export const languageReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_LANGUAGE:
        locale = action.payload
        draft.locale = action.payload
        break;
      default:
        break;
    }
  })
}
