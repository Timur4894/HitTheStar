import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/button.tsx';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setBook } from '../utils/redux/slices/bookSlice'; // Импортируем экшен

const FinalBookEdit = ({route}) => {
  const { bookPlot, selectedNote, selectedTopic} = route.params;
  const [bookName, setBookName] = useState(''); // Состояние для хранения названия книги
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Используем dispatch для отправки экшенов

  const handleConfirm = () => {
    // Проверяем, что имя книги не пустое
    if (bookName.trim() === '') {
      alert('Please enter a book name before confirming.'); // Сообщение об ошибке
      return;
    }

    // Создаём объект с информацией о книге
    const bookInfo = {
      selectedNote: selectedNote,
      selectedTopic: selectedTopic,
      bookPlot: bookPlot,
      name: bookName,
      estimatedTime: '2-4 months',
      price: 149.99,
    };

    // Отправляем экшен для сохранения книги в Redux
    dispatch(setBook(bookInfo));

    // Отображаем алерт о том, что книга добавлена успешно
    Alert.alert(
      'Success',
      'Your book has been added successfully!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.pop(3); // Убираем 2 последних экрана
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/6930825.jpg')} style={styles.image} />
      <Text style={styles.title}>Confirm Your Book Order</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.plotText}>Name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the name of your book"
          placeholderTextColor="#705b52"
          value={bookName}
          onChangeText={(text) => setBookName(text)}
        />
      </View>
      <Text style={styles.infoText}>Estimated time to write: 2-4 months</Text>
      <CustomButton onPress={handleConfirm} style={{ position: 'absolute', bottom: 50 }}>
        <Text>
          Confirm
        </Text>
      </CustomButton>
      <TouchableOpacity style={{ position: 'absolute', top: 65, left: 12 }} onPress={() => { navigation.goBack() }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#705b52' }}>
          Back to topics
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#f0eae1',
  },
  image: {
    width: '100%',
    height: '50%',
    marginTop: 30,
    borderRadius: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center',
    color: '#705b52',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row', // Выравнивание по горизонтали
    alignItems: 'center', // Выравнивание по центру
    marginBottom: 10,
  },
  plotText: {
    fontSize: 16,
    color: '#705b52',
    marginRight: 10, // Отступ между текстом и полем ввода
  },
  textInput: {
    flex: 1, // Занимает оставшееся пространство
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#edd0ad',
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    color: '#705b52',
  },
  infoText: {
    fontSize: 16,
    color: '#705b52',
    fontWeight: 'bold',
  },
});

export default FinalBookEdit;
