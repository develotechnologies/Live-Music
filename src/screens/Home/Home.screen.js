import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './Home.styles';
import data from './data';
import Container from '../../components/Container/Container.component';
import TextInput from '../../components/TextInput/TextInput.component';
import Colors from '../../utills/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {height, width} from 'react-native-dimension';
function Dashboard({navigation: {navigate}}) {
  return (
    <Container backgroundColor={Colors.white}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" color={Colors.blue} size={width(8)} />
        </TouchableOpacity>
        <TextInput
          iconSize={width(5)}
          containerStyle={{height: height(6)}}
          icon="search-outline"
        />
        <TouchableOpacity>
          <Ionicons
            name="notifications"
            color={Colors.darkGrayText}
            size={width(8)}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.itemFlatListContainer}
        columnWrapperStyle={styles.itemFlatListColumn}
        ItemSeparatorComponent={() => <View style={{height: height(2)}} />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigate('Bands')}
              style={styles.itemCont}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Image style={styles.itemImage} source={{uri: item.image}} />
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}
export default Dashboard;
