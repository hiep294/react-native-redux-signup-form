import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { _sel_languageSelectGetText_in } from '../language/selectors'

const AppText = ({ getText, style, languageKey }) => {
  return <Text style={style}>{getText(languageKey)}</Text>
}

const mapStateToProps = (state) => ({
  getText: _sel_languageSelectGetText_in(state)
})

AppText.propTypes = {
  getText: PropTypes.func.isRequired,
  languageKey: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default connect(mapStateToProps)(AppText)
