import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { Wrapper } from '../../components/wrapper';
import CustomButton from '../../components/button.tsx';
import QRCodeSvg from '../../assets/svg/QRCodeSvg.tsx';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookFromCart } from '../../utils/redux/slices/cartSlice.ts';
import {addInfo, removeInfo} from '../../utils/redux/slices/userInfoSlice.ts';
import {clearBook} from '../../utils/redux/slices/bookSlice.ts';

const ZFOURTH = () => {
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash' or 'card'
  const navigation = useNavigation();

  const cartItems = useSelector(state => state.cart.items); // Получаем книги из корзины
  const userInfo = useSelector(state => state.userInfo.items); // Получаем информацию о пользователе
  const bookInfo = useSelector(state => state.book.book); // Получаем информацию о книге

  const dispatch = useDispatch();

  // Рассчитать общую цену
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace('$', '')); // Преобразуем строку в число
      return total + priceNumber;
    }, 0).toFixed(2);
  };

  const handleRemoveBook = (book) => {
    dispatch(removeBookFromCart(book));
  };

  // Проверка, введены ли все необходимые данные
  const isFormComplete = () => {
    return address.length > 0 && deliveryDate.length > 0;
  };

  const handleConfirmOrder = () => {
    dispatch(addInfo({
      address,
      deliveryDate,
      paymentMethod,
      totalPrice: calculateTotalPrice(),
    }));

    alert(`Order confirmed!\nAddress: ${address}\nDate: ${deliveryDate}\nPayment: ${paymentMethod}`);
  };

  // Расчет общей цены с учетом книги
  const totalPrice = () => {
    const cartTotal = parseFloat(calculateTotalPrice());
    const bookPrice = bookInfo ? 149.99 : 0; // Если bookInfo существует, добавляем 149.99
    return (cartTotal + bookPrice).toFixed(2); // Возвращаем общую сумму
  };

  return (
    <Wrapper.Full>
      <ScrollView style={styles.container}>
        {/* Секция с оплатой */}
        <View style={styles.paymentContainer}>
          <Text style={styles.priceText}>Total: ${totalPrice()}</Text>
          <TouchableOpacity onPress={() => {}} style={styles.paymentInfoButton}>
            <Text style={styles.paymentInfoText}>
              You will have to pay upon delivery by showing the QR code
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.bookImage} />
              <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => handleRemoveBook(item)}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {bookInfo &&
          <>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: '#574f4b', marginBottom: 6, marginTop: 23}}>
              Own Book
            </Text>
          <View style={[styles.cartItem, {marginBottom: 32}]}>
            <View style={styles.details}>
              <Text style={styles.title}>{bookInfo.name}</Text>
              <Text style={styles.author}>{bookInfo.selectedTopic}</Text>
              <Text style={styles.price}>{bookInfo.price}</Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(clearBook())}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
          </>
        }

        {/* Форма доставки */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Delivery Information</Text>

          {/* Поле для ввода адреса */}
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />

          {/* Поле для выбора даты доставки */}
          <TextInput
            style={styles.input}
            placeholder="Enter delivery date (e.g. 2024-10-25)"
            value={deliveryDate}
            onChangeText={setDeliveryDate}
          />

          {/* Выбор способа оплаты */}
          <View style={styles.paymentMethodContainer}>
            <Text style={styles.label}>Select Payment Method</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity onPress={() => setPaymentMethod('card')} style={[styles.paymentButton, paymentMethod === 'card' && {backgroundColor: 'green'}]}>
                <Text style={styles.paymentButtonText}>
                  Card
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPaymentMethod('cash')} style={[styles.paymentButton, paymentMethod === 'cash' && {backgroundColor: 'green'}]}>
                <Text style={styles.paymentButtonText}>
                  Cash
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <CustomButton title="Confirm Order" onPress={handleConfirmOrder} style={{width: '45%'}}>
              <Text>
                Confirm Order
              </Text>
            </CustomButton>

            <CustomButton title="Remove Delivery Info" onPress={()=>{dispatch(removeInfo())}} style={{backgroundColor: 'gray', width: '45%'}}>
              <Text style={{textAlign: 'center'}}>
                Remove Delivery Info
              </Text>
            </CustomButton>
          </View>
        </View>

        {/* Переход на экран с QR-кодом, кнопка блокируется если форма не заполнена */}
        <TouchableOpacity
          onPress={() => { navigation.navigate('SeeQrCodeScreen') }}
          style={[styles.qrButton, { opacity: userInfo.length !== 0 ? 1 : 0.5 }]}
          disabled={userInfo.length === 0}
        >
          <Text style={styles.qrButtonText}>See QR Code</Text>
          <QRCodeSvg width={40} height={40} color='#705b52' />
        </TouchableOpacity>
        <View style={{marginBottom: 200}}/>
      </ScrollView>
    </Wrapper.Full>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0eae1',
    paddingTop: 140,
  },
  paymentContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  priceText: {
    alignSelf: 'center',
    color: '#574f4b',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paymentInfoButton: {
    backgroundColor: '#f0eae1',
    borderRadius: 8,
    padding: 12,
  },
  paymentInfoText: {
    textAlign: 'center',
    color: '#574f4b',
    fontSize: 14,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#574f4b',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f0eae1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  paymentMethodContainer: {
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#574f4b',
    marginBottom: 8,
  },
  paymentButton: {
    backgroundColor: 'gray',
    borderRadius: 8,
    padding: 12,
    alignSelf: 'flex-start',
    width: 100,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  qrButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginTop: 30,
    alignSelf: 'center',
  },
  qrButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#574f4b',
    marginRight: 8,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  bookImage: {
    width: 60,
    height: 90,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  remove: {
    fontSize: 14,
    color: '#f00',
    fontWeight: 'bold',
  },
});

export default ZFOURTH;
