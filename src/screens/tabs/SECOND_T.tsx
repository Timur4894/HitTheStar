import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Wrapper } from '../../components/wrapper'
import {useDispatch, useSelector} from 'react-redux';
import {removeNote} from '../../utils/redux/slices/notesSlice.ts';


const SECOND_T = ({ navigation }) => {
  const notesInfo = useSelector(state => state.notes.notes);

  const dispatch = useDispatch();

  const handleRemoveNote = (id) => {
    dispatch(removeNote({ id })); // Удаляем заметку по id
  };

  return (
    <Wrapper.Full>
      <ScrollView style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#705b52',
            textAlign: 'center',
            paddingVertical: 20,
          }}>
          Take notes to understand what book you want
        </Text>

        {notesInfo.map((note, incex) => (
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 12,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <Image
              source={require('../../assets/img/free-icon-history-book-7514333.png')}
              style={{width: 100, height: 100}}
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginLeft: 20,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#705b52'}}>
                Your Note
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#705b52',
                  width: 200,
                }}>
                {note.description}
              </Text>
            </View>
            <TouchableOpacity style={{position: 'absolute', top: 10, right: 12}} onPress={()=>{handleRemoveNote(note.id)}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#705b52'}}>
                X
              </Text>
            </TouchableOpacity>
          </View>))
        }

        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 12,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#574f4b',
              marginBottom: 12,
            }}>
            Create Note
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('CreateNoteScreen')}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#574f4b',
                paddingHorizontal: 8,
                backgroundColor: '#f0eae1',
                alignSelf: 'center',
                borderRadius: 8,
                overflow: 'hidden',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 100}}/>
      </ScrollView>
    </Wrapper.Full>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20,backgroundColor: '#f0eae1', paddingTop: 60
  },

});

export default SECOND_T;

