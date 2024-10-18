import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { Wrapper } from '../../components/wrapper';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/button.tsx';
import {useNavigation} from '@react-navigation/native';

const THIRD_T = () => {
  const navigation = useNavigation();
  return (
    <Wrapper.Full>
      <View style={styles.container}>
        <LinearGradient
          colors={['#d25566', '#6389b8', '#7cab76']}  // Задаем три цвета градиента
          style={styles.gradientBox}  // Применяем стиль для контейнера градиента
          start={{ x: 0, y: 0 }}  // Начало градиента
          end={{ x: 1, y: 1 }}  // Конец градиента (диагональный градиент)
        >
          <View>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 28, textAlign: 'center'}}>
              Create your own book using just notes and your ideas. We will write it for you!!!
            </Text>
            <Text style={{color: '#000', fontSize: 12, textAlign: 'center', marginTop: 4}}>
              creating a book based on your story has a fixed price of $149.99
            </Text>
          </View>

          <CustomButton onPress={()=>{navigation.navigate('CreateStoryForBook')}}>
            <Text>
              Create
            </Text>
          </CustomButton>
          <Image source={require('../../assets/img/15-removebg-preview.png')} style={{alignSelf: 'center', width: '100%', height: 290}}/>
        </LinearGradient>

      </View>
    </Wrapper.Full>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0eae1',
    paddingHorizontal: 20,
    paddingTop: 60
  },
  gradientBox: {
    marginTop: 20,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '95%',
  },
});

export default THIRD_T;
