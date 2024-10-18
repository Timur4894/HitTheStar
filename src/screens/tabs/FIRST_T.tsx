import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Wrapper } from '../../components/wrapper';
import LeftSvg from '../../assets/svg/LeftSvg.tsx';
import RightSvg from '../../assets/svg/RightSvg.tsx';
import HumanSvg from '../../assets/svg/HumanSvg.tsx';
import { useNavigation } from '@react-navigation/native';

const booksPopular = [
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: '$19.99',
    image: require('../../assets/img/JEMAGER.jpg'),
    about: 'A psychological thriller that tells the story of a woman who shoots her husband and then goes completely silent, and the therapist who is determined to unravel her mystery.'
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    price: '$15.49',
    image: require('../../assets/img/BlueBook.jpg'),
    about: 'A novel about a young girl raised in the marshlands of North Carolina who becomes a suspect in a murder investigation years later.'
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    price: '$18.99',
    image: require('../../assets/img/JEMAGER.jpg'),
    about: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education.'
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    price: '$22.49',
    image: require('../../assets/img/GIUAMA.jpg'),
    about: 'The memoir of former First Lady of the United States Michelle Obama, chronicling her roots, her time in the White House, and her public health initiatives.'
  },
];

const booksNew = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    price: '$21.99',
    image: require('../../assets/img/GIUAMA.jpg'),
    about: 'A self-help book that provides a proven framework for improving every day. James Clear shows how small habits can lead to remarkable results over time.'
  },
  {
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    price: '$13.99',
    image: require('../../assets/img/JEMAGER.jpg'),
    about: 'A book that offers a code of conduct based on ancient Toltec wisdom that advocates freedom from self-limiting beliefs that create needless suffering.'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: '$17.99',
    image: require('../../assets/img/BlueBook.jpg'),
    about: 'A philosophical book about a young Andalusian shepherd named Santiago who embarks on a journey to find treasure but discovers deeper spiritual truths along the way.'
  },
  {
    title: 'Dare to Lead',
    author: 'Brené Brown',
    price: '$20.99',
    image: require('../../assets/img/BlueBook.jpg'),
    about: 'A guide to courageous leadership, where Brené Brown discusses how to cultivate braver, more daring leaders, and how to embed the value of courage into any workplace.'
  },
];

const FIRST_T_SCREEN = () => {
  const [popularIndex, setPopularIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(0);
  const popularListRef = useRef(null);
  const newListRef = useRef(null);

  const navigation = useNavigation();

  const scrollFlatList = (listRef, index, setIndex, data) => {
    const newIndex = index + 1 >= data.length ? 0 : index + 1;
    listRef.current.scrollToIndex({ index: newIndex, animated: true });
    setIndex(newIndex);
  };

  const scrollBackFlatList = (listRef, index, setIndex, data) => {
    const newIndex = index - 1 < 0 ? data.length - 1 : index - 1;
    listRef.current.scrollToIndex({ index: newIndex, animated: true });
    setIndex(newIndex);
  };

  return (
    <Wrapper.Full>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <HumanSvg width={30} height={30} color='#705b52' />
          <Text style={styles.greeting}>Hi, Guest!</Text>
        </View>

        <View style={{shadowColor: '#000', // Use a dark color for the shadow
          shadowOffset: {
            width: 10, // No horizontal offset
            height: 10, // Vertical offset for shadow
          },
          shadowOpacity: 0.5, // Opacity of the shadow
          shadowRadius: 6.65, // Blur radius of the shadow
          // For Android
          elevation: 5, marginBottom: 20}}>
          <Image
            source={{uri: 'https://st4.depositphotos.com/1000975/40306/i/450/depositphotos_403060550-stock-photo-business-education-concept-with-businessman.jpg'}}
            style={styles.bannerImage}
          />
        </View>

        <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => scrollBackFlatList(popularListRef, popularIndex, setPopularIndex, booksPopular)}>
              <LeftSvg width={30} height={30} color="#705b52" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scrollFlatList(popularListRef, popularIndex, setPopularIndex, booksPopular)}>
              <RightSvg width={30} height={30} color="#705b52" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          ref={popularListRef}
          horizontal
          data={booksPopular}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.bookCard} onPress={() => { navigation.navigate('AddBookToCart', {image: item.image, about: item.about, title: item.title, author: item.author, price: item.price}) }}>
              <Image source={item.image} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Text style={styles.bookPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />

        {/* Раздел "Новые" */}
        <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>New</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => scrollBackFlatList(newListRef, newIndex, setNewIndex, booksNew)}>
              <LeftSvg width={30} height={30} color="#705b52" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scrollFlatList(newListRef, newIndex, setNewIndex, booksNew)}>
              <RightSvg width={30} height={30} color="#705b52" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          ref={newListRef}
          horizontal
          data={booksNew}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.bookCard} onPress={() => { navigation.navigate('AddBookToCart', {image: item.image, about: item.about, title: item.title, author: item.author, price: item.price}) }}>
              <Image source={item.image} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Text style={styles.bookPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />
        <View style={{marginBottom: 100}}/>
      </ScrollView>
    </Wrapper.Full>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0eae1', paddingTop: 0 },
  header: {
    padding: 8,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute', // Делаем заголовок абсолютным
    top: 20, // Отодвигаем его вниз
    left: 20,
    zIndex: 10, // На верхний уровень
    backgroundColor: 'rgba(240, 234, 225, 0.8)', // Прозрачный фон
    borderRadius: 10,
  },
  greeting: { fontSize: 17, fontWeight: 'bold', color: '#705b52', marginLeft: 5 },
  sectionTitle: { fontSize: 28, fontWeight: 'bold', marginVertical: 10, color: '#705b52' },
  bannerImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover', // Ensure the image covers the area
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bookCard: { marginLeft: 30 },
  bookImage: { width: 180, height: 220, borderRadius: 12, borderColor: '#edd0ad', borderWidth: 3, alignSelf: 'center' },
  bookTitle: { fontSize: 16, fontWeight: 'bold', color: '#705b52', alignSelf: 'center' },
  bookAuthor: { fontSize: 14, color: 'gray', alignSelf: 'center' },
  bookPrice: { fontSize: 14, color: '#705b52', fontWeight: 'bold', alignSelf: 'center', marginTop: 5 }, // Стили для цены
});

export default FIRST_T_SCREEN;
