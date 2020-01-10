import React from 'react'
import { View, StyleSheet, Platform, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

export default function CenterContainer({ children }) {
  return <SafeAreaView style={styles.container}>
    <View style={{ flex: 1 }}></View>{/**Fix some bugs */}
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === 'ios'}
    >
      {children}
    </KeyboardAwareScrollView>
  </SafeAreaView>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
