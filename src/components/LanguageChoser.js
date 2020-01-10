import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import * as localeList from '../language/localeList'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { _act_languageChangeLanguage_with } from '../language/actions'
import { _sel_languageSelectLocale_in } from '../language/selectors'
const locales = []
for (const key in localeList) {
  locales.push(localeList[key])
}

const LanguageChoser = ({
  changeLanguage,
  locale,
  setLanguageItem,
}) => {
  return <FlatList
    data={locales}
    keyExtractor={item => item}
    renderItem={({ item }) => setLanguageItem(item, locale, changeLanguage)}
  />
}

LanguageChoser.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  setLanguageItem: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => ({
  locale: _sel_languageSelectLocale_in(state)
})

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (locale) => dispatch(_act_languageChangeLanguage_with(locale))
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChoser)
