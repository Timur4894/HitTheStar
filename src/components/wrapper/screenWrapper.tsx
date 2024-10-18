import React from 'react';
import {StyleProp, StyleSheet, View, ImageBackground,LogBox } from 'react-native';
import {IWrapperProps, ISafeAreaWrapperProps} from '../../types/wrapper';

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
LogBox.ignoreAllLogs();
export const Full = ({children, style}: IWrapperProps) => {
  return <ImageBackground
  style={{...style, flex: 1}}
  source={{uri:""}}>
  <View style={[styles.box, style]}>{children}</View>
</ImageBackground>
};


