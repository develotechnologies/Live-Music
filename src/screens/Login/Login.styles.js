import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: width(45),
    height: height(17),
    marginTop: height(2),
  },
  grayBold: {
    color: Colors.grayText,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width(5),
    marginTop: height(2),
    letterSpacing: width(0.22),
  },
  grayBold1: {
    color: Colors.grayText,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width(4),
    marginTop: height(3.25),
    letterSpacing: width(0.1),
  },
  forgot: {
    color: Colors.blue,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: width(4),
    marginTop: height(2.5),
    letterSpacing: width(0.1),
    width: width(90),
  },
  fbCont: {
    shadowColor: Colors.blue,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    width: width(15),
    height: width(15),
    borderRadius: width(15),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height(5),
  },
});
export default styles;
