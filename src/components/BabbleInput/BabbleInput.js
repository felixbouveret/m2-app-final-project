import colors from 'app/assets/style/colors';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function BabbleInput({
  label,
  value,
  onChangeText,
  placeholder,
  style,
  error,
  ...attr
}) {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    borderWidth: 2,
    borderColor: colors.orange[500],
    padding: 16,
    borderRadius: 8,
  };

  const inputStyleFocused = {
    borderColor: colors.orange[1000],
  };

  const inputStyleError = {
    borderColor: colors.red[1000],
    color: colors.red[500],
  };

  const labelStyle = {
    marginBottom: 8,
  };
  const labelStyleError = {
    color: colors.red[500],
  };

  const handleStyle = () => {
    if (isFocused) {
      return [inputStyle, inputStyleFocused];
    }
    if (error) {
      return [inputStyle, inputStyleError];
    }
    return inputStyle;
  };
  const handleLabelStyle = () => {
    if (error) {
      return [labelStyle, labelStyleError];
    }
    return labelStyle;
  };

  return (
    <View style={style}>
      <Text style={handleLabelStyle()}>{label}</Text>
      <TextInput
        style={handleStyle()}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        {...attr}
      />
    </View>
  );
}
