import React from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Review from '../screens/Review/Review.Screen';
import Maps from '../screens/Maps/Maps.screen';
import Home from '../screens/Home/Home.screen';
import Colors from '../utills/Colors';
import {width, height} from 'react-native-dimension';
import Bands from '../screens/Bands/Bands.screen';
import Profile from '../screens/Profile/Profile.screen';
import MyProfile from '../screens/MyProfile/MyProfile.screen';
import Search from '../screens/Search/Search.screen';
import AllReviews from '../screens/AllReviews/AllReviews.Screen';
import Followers from '../screens/Followers/Followers.screen';
import CreateEvent from '../screens/CreateEvent/CreateEvent.screen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword.screen';
import Notifications from '../screens/Notifications/Notifications.screen';
import EditProfile from '../screens/EditProfile/EditProfile.screen';
import MyReviews from '../screens/MyReviews/MyReviews.Screen';
import Calandar from '../screens/Calandar/Calandar.screen';
import DummyScreen from '../screens/DummyScreen/DummyScreen.screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Tab.Style';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function MyTabBar({state, descriptors, navigation}) {
  // const onPressTabBar=(props)=>{
  //   console.log(navigation.dangerouslyGetState())
  //   // navigation.reset({index:0})
  // }
  return (
    <Tab.Navigator
      style={styles.tabBar}
      // tabBar={ props => <TouchableOpacity {...props} />}
      screenOptions={({route}) => ({
      
        tabBarIcon: ({focused, color, size}) => {
          let {name} = route;
          return (
            <>
              <Ionicons
                name={
                  name == 'Profile'
                    ? 'md-person-circle-outline'
                    : name == 'Search'
                    ? 'search-sharp'
                    : name == 'Maps'
                    ? 'location-sharp'
                    : 'home-sharp'
                }
                color={color}
                size={width(8)}
              />
              <Text style={[styles.text, focused && {color: color}]}>
                {name == 'Profile'
                  ? 'Profile'
                  : name == 'Search'
                  ? 'Search'
                  : name == 'Maps'
                  ? 'Near by'
                  : 'Home'}
              </Text>
            </>
          );
        },
        // tabBarButton:prop=><TouchableOpacity {...prop} onPress={()=>onPressTabBar(prop)}/>,
      })}
      tabBarOptions={{
        activeTintColor: Colors.blue,
        inactiveTintColor: Colors.darkGrayText,
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: Colors.white,
          height: height(9),
          paddingTop: height(100) < 600 ? 0 : height(2),
          paddingBottom: height(1),
        },
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" listeners={({ navigation, route }) => ({
    blur: () => {
      if (route.state && route.state.index > 0) {
        navigation.dispatch(StackActions.popToTop());
      }
    },
  })}>
        {() => (
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Bands" component={Bands} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="AllReviews" component={AllReviews} />
            <Stack.Screen name="Calandar" component={Calandar} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Maps"  listeners={({ navigation, route }) => ({
    blur: () => {
      if (route.state && route.state.index > 0) {
        navigation.dispatch(StackActions.popToTop());
      }
    },
  })}>
        {() => (
          <Stack.Navigator initialRouteName="Maps" headerMode="none">
            <Stack.Screen name="Maps" component={Maps} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Search"  listeners={({ navigation, route }) => ({
    blur: () => {
      if (route.state && route.state.index > 0) {
        navigation.dispatch(StackActions.popToTop());
      }
    },
  })}>
        {() => (
          <Stack.Navigator initialRouteName="Search" headerMode="none">
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Profile"  listeners={({ navigation, route }) => ({
    blur: () => {
      if (route.state && route.state.index > 0) {
        navigation.dispatch(StackActions.popToTop());
      }
    },
  })}>
        {() => (
          <Stack.Navigator initialRouteName="Profile" headerMode="none">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="Followers" component={Followers} />
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="MyReviews" component={MyReviews} />
            <Stack.Screen name="DummyScreen" component={DummyScreen} />
            <Stack.Screen name="AllReviews" component={AllReviews} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
