import React from 'react';
import { Item, Input, Icon } from 'native-base';
import PropTypes from 'prop-types';

const CustomInput = ({ icon, iconType, value, onChangeText, placeholder, secureTextEntry, error }) => {
  return React.useMemo(() => {
    // console.log(text.email)
    const iconProps = ({ name: icon, type: iconType || 'MaterialCommunityIcons' })
    const inputProps = ({ value, onChangeText, placeholder, secureTextEntry: secureTextEntry ? true : false })
    return (
      <Item error={error || false}>
        {icon && <Icon active {...iconProps} />}
        <Input {...inputProps}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {error && <Icon name='close-circle' />}
        {!error && error !== undefined && <Icon name='checkmark-circle' style={{ color: 'green' }} />}
      </Item>
    )
  }, [value, error, placeholder]);
}

CustomInput.propTypes = {
  icon: PropTypes.string,
  iconType: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

export default CustomInput
