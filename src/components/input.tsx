import {Controller} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {COLORS} from '../utils/constants';
import {
  ITextInputController,
  ITextInputWithControllerHandlers,
} from '../types/input';
import React from 'react';

export const styles = (error: boolean) =>
  StyleSheet.create({
    fullBox: {
      marginTop: 15,
      zIndex: 2,
      height: 56,
      borderColor: error ? COLORS.red : COLORS.green,
      borderWidth: 1,
    },
    label: {
      fontSize: 15,
      color: COLORS.black,
      marginLeft: 15,
      marginBottom: 10,
    },
    holder: {
      flexDirection: 'row',
      alignItems: 'center',

      paddingHorizontal: 16,
      flex: 1,
    },
    errorMessage: {
      color: COLORS.red,
      paddingTop: 10,
      paddingLeft: 20,
    },
    input: {
      flex: 1,
      height: '100%',
    },
  });

const TextField = (props: ITextInputWithControllerHandlers) => {
  const {
    Icon,
    fieldState: {error},
    label,
    field: {onBlur, onChange, value},
    children,
    style: s,
    placeHolder,
  } = props;
  const style = styles(!!error);

  return (
    <>
      <View style={[style.fullBox, s]}>
        {label && <Text style={style.label}>{label}</Text>}
        <View style={style.holder}>
          {!!Icon && (
            <Icon
              color={'#000'}
              style={{marginRight: 5}}
              height={25}
              width={25}
            />
          )}
          <TextInput
            placeholderTextColor={'#000'}
            style={style.input}
            onChangeText={e => onChange(e)}
            onBlur={onBlur}
            value={value}
            placeholder={placeHolder}
          />
          <>{children}</>
        </View>
      </View>
      {error && <Text style={style.errorMessage}>{error.message}</Text>}
    </>
  );
};

const CustomTextField = (props: ITextInputController) => {
  const {control, name, rules} = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={fieldProps => <TextField {...fieldProps} {...props} />}
    />
  );
};

export default CustomTextField;
