import { useEffect, useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './LoginScreen.styled';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [hidePasswordButton, setHidePasswordButton] = useState(true);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardShown(true);
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShown(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const onLogin = () => {
    Keyboard.dismiss();
    console.log(`Пошта: ${email} Пароль: ${password}`);
    formReset();
  };
  const togglePasswordShown = () => {
    setHidePasswordButton(!hidePasswordButton);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBG}
          resizeMode="cover"
          source={require('../../assets/images/Photo_BG.png')}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom: isKeyboardShown ? 150 : 132,
            }}
          >
            <Text style={styles.header}>Увійти</Text>

            <TextInput
              style={focusedEmail ? styles.inputFocused : styles.input}
              placeholder={'Адреса електронної пошти'}
              placeholderTextColor={'#BDBDBD'}
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
              autoComplete="email"
              onFocus={() => {
                setFocusedEmail(true);
              }}
              onBlur={() => {
                setFocusedEmail(false);
              }}
            />
            <View style={styles.passwordBox}>
              <Text
                style={styles.showPasswordButton}
                onPress={togglePasswordShown}
              >
                {hidePasswordButton ? 'Показати' : 'Приховати'}
              </Text>
              <TextInput
                style={focusedPassword ? styles.inputFocused : styles.input}
                placeholder={'Пароль'}
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry={hidePasswordButton}
                onChangeText={setPassword}
                value={password}
                autoComplete="password"
                onFocus={() => {
                  setFocusedPassword(true);
                }}
                onBlur={() => {
                  setFocusedPassword(false);
                }}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={onLogin}
            >
              <Text style={styles.buttonContent}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.linkText}>
              Немає акаунту?{' '}
              <Text style={styles.link} onPress={() => {}}>
                Зареєструватися
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
