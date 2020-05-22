import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    alignItems: 'center',
    fontSize: 30,
  },

  sorted: {
    alignItems: 'center',
    borderRadius: 8,
  },

  sortedText: {
    fontSize: 20,
    paddingTop: 30,
  },

  word: {
    alignItems: 'center',
    paddingTop: 180,
  },
  wordHeaderText: {
    fontSize: 25,
  },

  wordSelected: {
    fontWeight: 'bold',
    fontSize: 150,
  },

  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
  },

  Button: {
    backgroundColor: '#338BF3',
    borderRadius: 10,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
