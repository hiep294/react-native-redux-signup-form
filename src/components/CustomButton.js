import React, { useEffect, useState } from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator } from 'react-native';

function CustomButton({ title, onPress, isCallingApi }) {
  return React.useMemo(() => {
    return (
      <Button style={styles.container} onPress={onPress}>
        {isCallingApi && <ActivityIndicator />}
        <Text>{title}</Text>
      </Button>
    );
  }, [title, isCallingApi])

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
})

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default CustomButton
