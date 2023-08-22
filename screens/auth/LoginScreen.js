import { useEffect, useState } from 'react';
import {
  Alert,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
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
    Alert.alert('Credentials', `Пошта: ${email} Пароль: ${password}`);
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
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBG: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    paddingTop: 32,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },

  header: {
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 6,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 16,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    fontSize: 16,
    marginBottom: 16,
  },
  inputFocused: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 6,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    fontSize: 16,
    marginBottom: 16,
  },
  passwordBox: {
    position: 'relative',
  },
  showPasswordButton: {
    position: 'absolute',
    zIndex: 100,
    right: 16,
    top: 14,
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  button: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
    marginBottom: 16,
  },
  buttonContent: {
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkText: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#1B4371',
    fontSize: 16,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
