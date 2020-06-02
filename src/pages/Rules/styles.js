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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
    width: 19,
    marginLeft: 20,
    fontSize: 10,
  },
  button: {
    backgroundColor: '#338BF3',
    borderRadius: 10,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  littleTitle: {
    fontSize: 20,
  },
  word: {
    fontSize: 20,
  },
});
