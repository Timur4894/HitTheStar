// import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import QRCode from 'react-native-qrcode-svg';
// import LinearGradient from 'react-native-linear-gradient';
// import CustomButton from '../components/button.tsx';  // Импортируем компонент для градиентов
//
// const SeeQrCodeScreen = () => {
//   const navigation = useNavigation();
//
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Text style={styles.backText}>Back</Text>
//       </TouchableOpacity>
//
//       {/* Градиентный блок с QR-кодом */}
//       <LinearGradient
//         colors={['#ff9a9e', '#fad0c4', '#fcb69f', '#ffecd2']}  // Градиент из 4-х цветов
//         style={styles.qrCodeContainer}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         <View style={{padding: 8, backgroundColor: '#fff', borderRadius: 8}}>
//           <QRCode
//             value="https://example.com"  // Значение для генерации QR-кода
//             size={200}  // Размер QR-кода
//             color="#705b52"  // Цвет QR-кода
//           />
//         </View>
//
//         <Text style={styles.quote}>
//           "A room without books is like a body without a soul."
//         </Text>
//       </LinearGradient>
//
//       <CustomButton onPress={()=>{}} style={{width: '70%', marginTop: 30}}>
//         <Text>Copy code</Text>
//       </CustomButton>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0eae1',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 65,
//     left: 12,
//   },
//   backText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#705b52',
//   },
//   qrCodeContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//     paddingTop: 40,
//     paddingBottom: 60,
//     borderRadius: 20,
//     width: 300,
//   },
//   quote: {
//     marginTop: 20,
//     fontSize: 16,
//     fontStyle: 'italic',
//     color: '#705b52',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
// });
//
// export default SeeQrCodeScreen;

import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/button.tsx';  // Импортируем компонент для градиентов
import Clipboard from '@react-native-clipboard/clipboard'; // Импортируем Clipboard

const SeeQrCodeScreen = () => {
  const navigation = useNavigation();

  // Функция для генерации случайного 6-значного кода
  const generateRandomCode = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString(); // Генерируем 6-значный код
    return randomCode;
  };

  // Функция для копирования кода в буфер обмена
  const handleCopyCode = () => {
    const code = generateRandomCode(); // Генерируем код
    Clipboard.setString(code); // Копируем код в буфер обмена
    alert(`${code} code copied to clipboard!`); // Уведомление пользователя
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Градиентный блок с QR-кодом */}
      <LinearGradient
        colors={['#ff9a9e', '#fad0c4', '#fcb69f', '#ffecd2']}  // Градиент из 4-х цветов
        style={styles.qrCodeContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ padding: 8, backgroundColor: '#fff', borderRadius: 8 }}>
          <QRCode
            value="https://example.com"  // Значение для генерации QR-кода
            size={200}  // Размер QR-кода
            color="#705b52"  // Цвет QR-кода
          />
        </View>

        <Text style={styles.quote}>
          "A room without books is like a body without a soul."
        </Text>
      </LinearGradient>

      <CustomButton onPress={handleCopyCode} style={{ width: '70%', marginTop: 30 }}>
        <Text>Copy code</Text>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0eae1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 65,
    left: 12,
  },
  backText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#705b52',
  },
  qrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 60,
    borderRadius: 20,
    width: 300,
  },
  quote: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#705b52',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default SeeQrCodeScreen;
