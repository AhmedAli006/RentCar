
import * as React from 'react';
import styles from '../styling';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
 
const style = StyleSheet.create(styles);

import { useNavigation } from "@react-navigation/native";
const Cards = props => {
const navigation = useNavigation();

const payScreen = ()=>{
navigation.navigate('Payment')
}

  return (
    <View
     
      style={{
        ...style.bgLight,
        
        ...style.p1,
        ...{margin: 10},
  
        ...{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
       
      }}>
      <TouchableOpacity  onPress={payScreen() } style={[style.w100, style.flexRow]}>
        <Image
          style={{width: '45%', height: 150}}
          source={{
            uri: props.url,
          }}
        />
        <View style={{paddingLeft: 12 ,}}>
          <Text numberOfLines={2}>{props.type}</Text>
          <Text style={[style.textBold, {paddingVertical: 5}]}>
            {props.name}
          </Text>
          <Text style={{flex:1,flexWrap:'wrap'}}>comfortable with a smooth ride </Text>

          <Text style={[style.textBold, {paddingVertical: 5, paddingTop: 35}]}>
            {props.price}$
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;