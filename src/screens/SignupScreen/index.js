import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { connect } from 'react-redux';
import { _sel_signUpSelectNewUser_in } from './selectors';
import { _sel_languageSelectGetText_in } from '../../language/selectors'
import {
  _act_signUpChangeEmail_with,
  _act_signUpChangePassword_with,
  _act_signUpChangeConfirmPassword_with,
  _act_signUpRegisterNewUser
} from './actions'
import PropTypes from 'prop-types'
import LanguageChoser from '../../components/LanguageChoser';
import Margin10 from '../../components/Margin10'
import CenterContainer from '../../components/CenterContainer'

const SignupScreen = ({
  newUser,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  registerNewUser,
  navigation,
  getText,
}) => {
  const { email, password, confirmPassword, isEmailError, isPasswordError, isConfirmPasswordError, isCallingApi } = newUser

  return <CenterContainer>
    <Margin10>
      <CustomInput
        icon="email"
        placeholder={getText('email')}
        value={email}
        onChangeText={changeEmail}
        error={isEmailError}
      />
    </Margin10>
    <Margin10>
      <CustomInput
        icon="lock"
        placeholder={getText('password')}
        value={password}
        onChangeText={changePassword}
        error={isPasswordError}
        secureTextEntry
      />
    </Margin10>
    <Margin10>
      <CustomInput
        icon="lock"
        placeholder={getText('confirm-password')}
        value={confirmPassword}
        onChangeText={changeConfirmPassword}
        error={isConfirmPasswordError}
        secureTextEntry
      />
    </Margin10>
    <CustomButton
      title={getText('sign-up')}
      onPress={registerNewUser}
      isCallingApi={isCallingApi}
    />
    <CustomButton
      title={getText('sign-in')}
      onPress={() => {
        navigation.navigate('signIn')
      }}
    />
    <LanguageChoser
      setLanguageItem={(item, locale, changeLanguage) => (
        <TouchableOpacity onPress={() => changeLanguage(item)}>
          <Text style={{ color: locale === item ? 'black' : 'blue' }}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  </CenterContainer>
}

SignupScreen.propTypes = {
  newUser: PropTypes.object,
  changeEmail: PropTypes.func,
  changePassword: PropTypes.func,
  changeConfirmPassword: PropTypes.func,
  registerNewUser: PropTypes.func,
  getText: PropTypes.func,
}

const mapStateToProps = (state) => ({
  newUser: _sel_signUpSelectNewUser_in(state),
  getText: _sel_languageSelectGetText_in(state),
})

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (newEmail) => dispatch(_act_signUpChangeEmail_with(newEmail)),
  changePassword: (newPassword) => dispatch(_act_signUpChangePassword_with(newPassword)),
  changeConfirmPassword: (newConfirmPassword) => dispatch(_act_signUpChangeConfirmPassword_with(newConfirmPassword)),
  registerNewUser: () => dispatch(_act_signUpRegisterNewUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

