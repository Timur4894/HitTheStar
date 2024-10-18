import {Dimensions} from 'react-native';
import ChooseNote from '../../screens/ChooseNote.tsx';
//Change screen names here
export enum SCREENS {
  BottomRouter = 'BottomRouter',
  Loader = 'Loader',
  Start = 'Start',
  AddBookToCart= 'AddBookToCart',
  CreateNoteScreen= 'CreateNoteScreen',
  CreateStoryForBook= 'CreateStoryForBook',
  SeeQrCodeScreen= 'SeeQrCodeScreen',
  FinalBookEdit= 'FinalBookEdit',
  ChooseNote= 'ChooseNote',
  FIRST_T = 'F_T',
  SECOND_T =  'S_T',
  THIRD_T = 'T_T',
  ZFOURTH_T = 'Z_T',
}
export const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('screen');
export enum COLORS {
  black = '#000000',
  primary = "#F8F8F8",
  white = '#FFFFFF',
  blue = '#2D62EE',
  red = 'red',
  gray = 'gray',
}
