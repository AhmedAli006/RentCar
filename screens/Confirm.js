import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';




import styles from '../styling';
const style = StyleSheet.create(styles);

const Confirm = () =>{
  
return<>
<View>

 <View style={{ alignItems: 'center',justifyContent: 'center'}}>
    
     <Image
          style={[{width: '45%', height: 150}]}
          source={{
            uri:"https://image.shutterstock.com/image-vector/payment-confirmation-color-line-icon-260nw-1761131330.jpg" ,
          }}
        />
 </View>

</View>
</>
}



export default Confirm;