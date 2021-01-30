import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  userImage: {
    alignSelf: 'center',
    width: width(25),
    height: width(25),
    borderRadius: width(12.5),
    marginTop: height(2),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  userImage1: {
    width: width(10),
    height: width(10),
    borderRadius: width(5),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: Colors.white,
  },
  plus: {
    width: width(10),
    height: width(10),
    borderRadius: width(5),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normal: {
    fontSize: width(4),
    color: Colors.blackText,
    letterSpacing: width(0.1),
    marginTop: height(1),
    marginLeft: '5%',
  },
  heading: {
    fontSize: width(3),
    color: Colors.blackText,
    fontWeight: 'bold',
    letterSpacing: width(0.1),
    marginTop: height(1.5),
    marginLeft: '5%',
  },
  gray: {
    color: Colors.darkGrayText,
    fontSize: width(3),
    letterSpacing: width(0.1),
    marginTop: height(1.5),
    marginLeft: '5%',
  },
  artist: {
    color: Colors.blackText,
    fontSize: width(2.7),
    letterSpacing: width(0.1),
    marginTop: height(0.5),
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    flexDirection: 'row',
    width: width(100),
  },
  bold: {
    color: '#000',
    fontSize: width(4.5),
    fontWeight: 'bold',
  },
  time: {
    width: width(7),
    height: width(7),
    borderRadius: width(3.5),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height(1),
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -width(3.5),
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: Colors.grayText,
    marginTop: height(1),
  },
  main: {
    marginTop: height(2),
  },
  dataCont: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    width: width(90),
    borderRadius: 3,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height(3),
    paddingBottom: height(2.5),
    maxHeight: height(62),
  },
  single: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height(1.5),
  },
  country: {
    width: '19%',
    paddingVertical: height(0.8),
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingHorizontal: width(2),
    alignItems: 'center',
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  white: {
    color: Colors.white,
    fontSize: width(3),
    letterSpacing: width(0.1),
  },
});
export default styles;
