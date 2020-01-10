import { initialState } from './reducer'
const getDomain = (state) => state.language || initialState

export const _sel_languageSelectLocale_in = (state) => getDomain(state)['locale']
export const _sel_languageSelectGetText_in = (state) => getDomain(state)['getText'].bind(getDomain(state))
