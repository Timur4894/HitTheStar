import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addNote } from '../utils/redux/slices/notesSlice.ts';

const CreateNoteScreen = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Советы для написания заметки
  const tips = [
    "Keep your note short and to the point.",
    "Write down the most important thoughts or ideas.",
    "Use bullet points or numbered lists to organize your thoughts.",
    "Summarize key concepts that resonate with you.",
    "Reflect on how this information could impact your writing."
  ];

  // Функция для сохранения заметки и возврата на предыдущий экран
  const handleSaveNote = () => {
    if (note.trim() === '') {
      alert('Please enter a note before saving.'); // Проверка на пустую заметку
      return;
    }

    // Создаем новую заметку с уникальным id
    const newNote = {
      id: Math.random().toString(), // Уникальный идентификатор
      title: 'Note', // Можно изменить для пользовательского заголовка
      description: note,
    };

    // Отправляем экшен для добавления заметки в Redux
    dispatch(addNote(newNote));

    // Возвращаемся на предыдущий экран
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Отображение советов */}
        <View style={styles.tipsContainer}>
          {tips.map((tip, index) => (
            <Text key={index} style={styles.tipText}>
              {index + 1}. {tip}
            </Text>
          ))}
        </View>

        <TouchableOpacity style={{position: 'absolute', top: 35, left: 12}} onPress={()=>{navigation.goBack()}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>
            Back
          </Text>
        </TouchableOpacity>

        {/* Заголовок и ввод заметки */}
        <Text style={styles.title}>Write your note</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your note..."
          value={note}
          onChangeText={setNote}
          multiline
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
          <Text style={styles.saveButtonText}>Save Note</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, backgroundColor: '#f0eae1', padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#574f4b', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 15, fontSize: 16, textAlignVertical: 'top', height: 150 },
  saveButton: { backgroundColor: '#705b52', padding: 15, borderRadius: 8, marginTop: 20, alignItems: 'center' },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  // Стили для советов
  tipsContainer: { marginBottom: 20 },
  tipText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#705b52',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default CreateNoteScreen;
