import { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './RegisterScreen.styled';

const RegisterScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [focusedLogin, setFocusedLogin] = useState(false);
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
    setLogin('');
    setEmail('');
    setPassword('');
  };

  const onSignUp = () => {
    Keyboard.dismiss();
    console.log(`Логін: ${login} Пошта: ${email} Пароль: ${password}`);
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
              paddingBottom: isKeyboardShown ? 140 : 66,
            }}
          >
            <View style={styles.iconThumbContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.addIconButton}
                onPress={() => {}}
              >
                <Image
                  source={require('../../assets/images/add_icon.png')}
                  style={styles.addIcon}
                />
              </TouchableOpacity>
              <View style={styles.iconThumb}></View>
            </View>

            <Text style={styles.header}>Реєстрація</Text>
            <TextInput
              style={focusedLogin ? styles.inputFocused : styles.input}
              placeholder={'Логін'}
              placeholderTextColor={'#BDBDBD'}
              onChangeText={setLogin}
              value={login}
              onFocus={() => {
                setFocusedLogin(true);
              }}
              onBlur={() => {
                setFocusedLogin(false);
              }}
            />
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
              onPress={onSignUp}
            >
              <Text style={styles.buttonContent}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text style={styles.linkText}>
              Вже є акаунт?{' '}
              <Text style={styles.link} onPress={() => {}}>
                Увійти
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
