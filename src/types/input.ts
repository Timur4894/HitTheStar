import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';
import {SvgProps} from 'react-native-svg';

type IInputRulesOmits =
  | 'disabled'
  | 'valueAsNumber'
  | 'valueAsDate'
  | 'setValueAs';

export interface ITextInput {
  Icon?: React.JSXElementConstructor<SvgProps>;
  placeHolder: string;
  rightIcon?: SvgProps;
  secureTextEntry?: boolean;
  children?: Element;
  label?: string;
}

export interface ITextInputWithControllerHandlers extends ITextInput {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}

export interface ITextInputController extends ITextInput {
  rules: Omit<RegisterOptions<FieldValues, any>, IInputRulesOmits> | undefined;
  control: Control<FieldValues>;
  name: string;
}
