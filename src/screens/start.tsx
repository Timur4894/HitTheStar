import {ImageBackground, Text, View} from 'react-native';
import CustomButton from '../components/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Wrapper} from '../components/wrapper';
import { SCREENS } from '../utils/constants';

const StartScreen = ({navigation}) => {
  return (
    <Wrapper.Full>
        <SafeAreaView style={{justifyContent: 'flex-end', flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            
          </Text>
        </View>
          <CustomButton onPress={() => {navigation.navigate(SCREENS.BottomRouter)}}>Start</CustomButton>
        </SafeAreaView>
    </Wrapper.Full>
  );
};

export default StartScreen;
