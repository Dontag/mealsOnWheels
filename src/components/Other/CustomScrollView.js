import React from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../../utilities/colors';

const CustomScrollView = ({ children, nestedScrollEnabled = false, scrolling = true }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
      style={[styles.__container]}>
      <ScrollView
        scrollEnabled={scrolling}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps="always"
        nestedScrollEnabled
        style={[styles.__container]}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomScrollView;

const styles = StyleSheet.create({
  __container: {
    flex: 1,
    backgroundColor: colors.offWhite
  },
});
