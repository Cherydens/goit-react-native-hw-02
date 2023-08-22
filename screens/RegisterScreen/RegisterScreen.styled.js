import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },

  iconThumbContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -60,
    marginBottom: 32,
  },

  iconThumb: {
    borderRadius: 16,
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',
  },

  addIconButton: {
    position: 'absolute',
    zIndex: 10,
    right: -12,
    bottom: 18,
    width: 24,
    height: 24,
  },

  addIcon: {
    width: 24,
    height: 24,
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
