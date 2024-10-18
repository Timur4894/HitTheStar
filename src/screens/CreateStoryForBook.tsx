import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';  // Импортируем хук для навигации
import LinearGradient from 'react-native-linear-gradient';
import ChooseNote from './ChooseNote.tsx';

const topics = ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Thriller'];

const CreateStoryForBook = () => {
  const navigation = useNavigation();

  const handleTopicPress = (topic) => {
    console.log('Selected topic:', topic);
    navigation.navigate('ChooseNote', { selectedTopic: topic });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/jema_lh_073_10.jpg')} style={{width: 200, height: 200, borderRadius: 12, overflow: 'hidden'}} />
      <Text style={styles.title}>Choose a Topic for Your Book</Text>
      <TouchableOpacity style={{position: 'absolute', top: 65, left: 12}} onPress={()=>{navigation.goBack()}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#705b52'}}>
          Back
        </Text>
      </TouchableOpacity>
      {topics.map((topic, index) => (
        <TouchableOpacity key={index} onPress={() => handleTopicPress(topic)} style={styles.topicButton}>
          <LinearGradient
            colors={['#6389b8', '#7cab76']}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.topicText}>{topic}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0eae1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#705b52',
    marginBottom: 30,
    marginTop: 20
  },
  topicButton: {
    marginBottom: 20,
    width: '80%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CreateStoryForBook;
