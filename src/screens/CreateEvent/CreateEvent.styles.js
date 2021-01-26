import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    flexDirection: 'row',
  },
  bold: {
    fontSize: width(5),
    color: Colors.blackText,
    fontWeight: 'bold',
    letterSpacing: width(0.1),
  },
  bold1: {
    fontSize: width(4.5),
    color: Colors.blackText,
    fontWeight: 'bold',
    letterSpacing: width(0.1),
  },
  normal: {
    fontSize: width(3.2),
    color: Colors.blackText,
    letterSpacing: width(0.1),
    fontWeight: 'bold',
    width: '45%',
  },
  modalHeading: {
    fontSize: width(4.0),
    color: Colors.white,
    letterSpacing: width(0.1),
    textAlign: 'left',
  },
  blue: {
    fontSize: width(3.5),
    color: Colors.blue,
    letterSpacing: width(0.1),
  },
  country: {
    width: '30%',
    paddingVertical: height(0.8),
    backgroundColor: Colors.blue,
    borderRadius: 30,
    paddingHorizontal: width(2),
    alignItems: 'center',
  },
  white1: {
    color: Colors.white,
    fontSize: width(3.7),
    letterSpacing: width(0.4),
    fontWeight: 'bold',
    marginTop: height(2),
  },
  white2: {
    color: Colors.white,
    fontSize: width(4.5),
    letterSpacing: width(0.4),
    marginTop: height(1),
  },
  white: {
    color: Colors.white,
    fontSize: width(3.7),
    letterSpacing: width(0.1),
  },
  grayText: {
    color: Colors.grayText,
    fontSize: width(3),
  },
  bold: {
    color: '#000',
    fontSize: width(4.5),
    fontWeight: 'bold',
  },
  lightWhite: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: width(3.5),
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width(90),
    alignSelf: 'center',
    marginTop: height(2),
  },
  line: {
    width: width(90),
    alignSelf: 'center',
    height: 1,
    backgroundColor: Colors.grayText,
    marginTop: height(1),
  },
  line1: {
    width: '100%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: Colors.grayText,
    marginTop: height(1),
  },
  itemCont: {
    backgroundColor: Colors.white,
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    paddingVertical: height(1),
    width: width(90),
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: width(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  following: {
    backgroundColor: Colors.white,
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    paddingVertical: height(0.5),
    paddingHorizontal: width(10),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width(12),
    height: width(12),
    borderRadius: width(6),
  },
  image1: {
    width: width(20),
    height: width(20),
    borderRadius: width(10),
  },
  followingModal: {
    paddingTop: height(2),
    backgroundColor: Colors.blue,
    borderRadius: 10,
    width: width(70),
    alignSelf: 'center',
    paddingHorizontal: '6%',
  },
  closeCont: {
    width: width(5),
    height: width(6),
    borderRadius: width(3),
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  dateCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '3%',
    marginTop: height(1),
  },
  startEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  button: {
    backgroundColor: Colors.white,
    width: width(25),
    marginVertical: height(2.5),
  },
  label: {
    color: Colors.blue,
    fontSize: width(2.8),
  },
});
export default styles;
