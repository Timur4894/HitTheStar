import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/button.tsx';
import { useSelector } from 'react-redux';

const ChooseNote = ({ route }) => {
  const { selectedTopic } = route.params;
  const notesInfo = useSelector(state => state.notes.notes);
  const [bookPlot, setBookPlot] = useState('');
  const [selectedNote, setSelectedNote] = useState(null); // Хранит выбранную заметку
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('FinalBookEdit', { bookPlot, selectedNote, selectedTopic});
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#705b52', marginTop: 80, alignSelf: 'center', marginBottom: 20 }}>
        Write your story idea
      </Text>
      {/* Поле для ввода текста */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your book plot here..."
        placeholderTextColor="#705b52"
        value={bookPlot}
        onChangeText={(text) => setBookPlot(text)}
        multiline
      />
      <CustomButton onPress={handleContinue} style={{ marginTop: 12 }}>
        <Text>
          Continue
        </Text>
      </CustomButton>
      <TouchableOpacity style={{ position: 'absolute', top: 25, left: 12 }} onPress={() => { navigation.goBack() }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#705b52' }}>
          Back to topics
        </Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#705b52', marginTop: 60, alignSelf: 'center', marginBottom: 6 }}>
        And/Or
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#705b52', alignSelf: 'center', marginBottom: 20 }}>
        select existing notes
      </Text>

      {notesInfo.map((note, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedNote(note)} // Устанавливаем выбранную заметку при нажатии
          style={{
            backgroundColor: selectedNote === note ? '#e0d4c4' : '#fff', // Изменяем цвет фона выбранной заметки
            borderRadius: 8,
            padding: 12,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 18,
          }}>
          <Image
            source={require('../assets/img/free-icon-history-book-7514333.png')}
            style={{ width: 100, height: 100 }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: 20,
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#705b52' }}>
              Your Note
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#705b52',
              width: 200,
            }}>
              {note.description}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={{ marginBottom: 120 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eae1',
    padding: 20,
    paddingTop: 50,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#edd0ad',
    borderWidth: 2,
    padding: 15,
    fontSize: 16,
    color: '#705b52',
    textAlignVertical: 'top',  // Чтобы текст начинался сверху
    height: 200,  // Высота поля для ввода текста
  },
});

export default ChooseNote;
