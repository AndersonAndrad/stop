import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  // containers
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    marginTop: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wordContainer: {
    backgroundColor: '#338bf3',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
  },

  tittleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#338bf3',
    width: 30,
    borderRadius: 5,
  },

  listWords: {
    fontSize: 25,
    color: '#fff',
  },

  littleTitle: {
    fontSize: 20,
  },

  wordsContainer: {
    marginTop: 150,
    backgroundColor: '#f14f15',
    height: 50,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },

  word: {
    fontSize: 20,
  },

  saveContainer: {
    backgroundColor: '#338BF3',
    borderRadius: 10,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveText: {
    fontSize: 18,
    color: '#fff',
  },

  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 50,
    flexDirection: 'row',
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
    fontWeight: 'bold',
  },
});
