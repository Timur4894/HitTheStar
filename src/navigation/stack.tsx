import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/constants';
import BottomTabRouter from './bottom';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from '../screens/start';
import Loader from '../screens/loader';
import AddBookToCart from '../screens/AddBookToCart.tsx';
import CreateNoteScreen from '../screens/CreateNoteScreen.tsx';
import CreateStoryForBook from '../screens/CreateStoryForBook.tsx';
import ChooseNote from '../screens/ChooseNote.tsx';
import SeeQrCodeScreen from '../screens/SeeQrCodeScreen.tsx';
import FinalBookEdit from '../screens/FinalBookEdit.tsx';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={SCREENS.Loader} component={Loader} /> */}
        {/*<Stack.Screen name={SCREENS.Start} component={StartScreen} />*/}
        <Stack.Screen name={SCREENS.BottomRouter} component={BottomTabRouter} />
        <Stack.Screen name={SCREENS.AddBookToCart} component={AddBookToCart} />
        <Stack.Screen name={SCREENS.CreateNoteScreen} component={CreateNoteScreen} options={{presentation: 'modal'}}/>
        <Stack.Screen name={SCREENS.CreateStoryForBook} component={CreateStoryForBook}/>
        <Stack.Screen name={SCREENS.ChooseNote} component={ChooseNote}/>
        <Stack.Screen name={SCREENS.SeeQrCodeScreen} component={SeeQrCodeScreen}/>
        <Stack.Screen name={SCREENS.FinalBookEdit} component={FinalBookEdit}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
