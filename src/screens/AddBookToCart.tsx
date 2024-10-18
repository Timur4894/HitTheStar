// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
//
// const AddBookToCart = ({route}) => {
//   const { title, author, price, image, about } = route.params; // Получаем переданные параметры
//   const navigation = useNavigation();
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Image source={image} style={styles.bookImage} />
//         <Text style={styles.bookTitle}>{title}</Text>
//         <Text style={styles.bookAuthor}>{author}</Text>
//       </View>
//       <TouchableOpacity
//         style={{position: 'absolute', top: 50, left: 12}}
//         onPress={() => {
//           navigation.goBack();
//         }}>
//         <Text style={{fontSize: 22, fontWeight: 'bold', color: '#705b52'}}>
//           Back
//         </Text>
//       </TouchableOpacity>
//
//       <View style={styles.infoContainer}>
//         <View style={styles.infoItem}>
//           <Text style={styles.infoValue}>4.4</Text>
//           <Text style={styles.infoLabel}>Rating</Text>
//         </View>
//         <View style={styles.infoItem}>
//           <Text style={styles.infoValue}>Around 200</Text>
//           <Text style={styles.infoLabel}>Number of Pages</Text>
//         </View>
//         <View style={styles.infoItem}>
//           <Text style={styles.infoValue}>Eng</Text>
//           <Text style={styles.infoLabel}>Language</Text>
//         </View>
//         <View style={styles.infoItem}>
//           <Text style={styles.infoValue}>Price</Text>
//           <Text style={styles.infoLabel}>{price}</Text>
//         </View>
//       </View>
//
//       <View style={styles.synopsisContainer}>
//         <Text style={styles.synopsisTitle}>About</Text>
//         <Text style={styles.synopsisText}>{about}</Text>
//       </View>
//
//       <TouchableOpacity
//         style={{position: 'absolute', bottom: -70, alignSelf: 'center'}}
//         onPress={() => {
//           navigation.goBack();
//         }}>
//         <Text style={{fontSize: 32, fontWeight: 'bold', color: '#705b52'}}>
//           Add to Cart
//         </Text>
//       </TouchableOpacity>
//
//       {/*<View style={styles.pageControls}>*/}
//       {/*   <TouchableOpacity style={styles.pageButton}>*/}
//       {/*     <Text style={styles.pageText}>←</Text>*/}
//       {/*   </TouchableOpacity>*/}
//       {/*   <Text style={styles.pageNumber}>2/262</Text>*/}
//       {/*   <TouchableOpacity style={styles.pageButton}>*/}
//       {/*     <Text style={styles.pageText}>→</Text>*/}
//       {/*   </TouchableOpacity>*/}
//       {/* </View>*/}
//     </ScrollView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f7f2',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   bookImage: {
//     width: 220,
//     height: 260,
//     borderRadius: 8,
//     marginTop: 60
//   },
//   bookTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 10,
//   },
//   bookAuthor: {
//     fontSize: 18,
//     color: '#999',
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#f7f1e8',
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   infoItem: {
//     alignItems: 'center',
//   },
//   infoValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   infoLabel: {
//     fontSize: 14,
//     color: '#999',
//   },
//   synopsisContainer: {
//     marginBottom: 20,
//   },
//   synopsisTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   synopsisText: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#666',
//   },
//   audioControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   audioButton: {
//     fontSize: 24,
//     color: '#333',
//     marginRight: 10,
//   },
//   slider: {
//     flex: 1,
//     marginHorizontal: 10,
//   },
//   audioTime: {
//     fontSize: 16,
//     color: '#999',
//   },
//   pageControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   pageButton: {
//     paddingHorizontal: 15,
//   },
//   pageText: {
//     fontSize: 24,
//     color: '#333',
//   },
//   pageNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });
//
// export default AddBookToCart;

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {addBookToCart} from '../utils/redux/slices/cartSlice.ts';

const AddBookToCart = ({ route }) => {
  const { title, author, price, image, about } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Достаем dispatch из Redux

  const handleAddToCart = () => {
    dispatch(addBookToCart({ title, author, price, image, about })); // Добавляем книгу в корзину
    navigation.goBack(); // Возвращаемся назад после добавления
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={image} style={styles.bookImage} />
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
      <TouchableOpacity
        style={{ position: 'absolute', top: 50, left: 12 }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#705b52' }}>Back</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>4.4</Text>
          <Text style={styles.infoLabel}>Rating</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>Around 200</Text>
          <Text style={styles.infoLabel}>Number of Pages</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>Eng</Text>
          <Text style={styles.infoLabel}>Language</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>Price</Text>
          <Text style={styles.infoLabel}>{price}</Text>
        </View>
      </View>

      <View style={styles.synopsisContainer}>
        <Text style={styles.synopsisTitle}>About</Text>
        <Text style={styles.synopsisText}>{about}</Text>
      </View>

      <TouchableOpacity
        style={{ position: 'absolute', bottom: -70, alignSelf: 'center' }}
        onPress={handleAddToCart} // Добавляем обработчик на кнопку
      >
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#705b52' }}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f2',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bookImage: {
    width: 220,
    height: 260,
    borderRadius: 8,
    marginTop: 60
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  bookAuthor: {
    fontSize: 18,
    color: '#999',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f7f1e8',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoLabel: {
    fontSize: 14,
    color: '#999',
  },
  synopsisContainer: {
    marginBottom: 20,
  },
  synopsisTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  synopsisText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  audioButton: {
    fontSize: 24,
    color: '#333',
    marginRight: 10,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  audioTime: {
    fontSize: 16,
    color: '#999',
  },
  pageControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  pageButton: {
    paddingHorizontal: 15,
  },
  pageText: {
    fontSize: 24,
    color: '#333',
  },
  pageNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});


export default AddBookToCart;
