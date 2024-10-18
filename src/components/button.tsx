import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IButton} from '../types/button';
import {COLORS} from '../utils/constants';

const CustomButton = ({
  children: title,
  onPress,
  style,
  textStyle,
}: IButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.box, style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: COLORS.white,
  },
  box: {
    width: '90%',
    backgroundColor: '#d25566',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
});

export default CustomButton;
