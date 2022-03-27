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
import { Checkbox } from 'react-native-paper';

import { useNavigation } from "@react-navigation/native";
        
import styles from '../styling';
const style = StyleSheet.create(styles);

const Payment = () =>{
   const [checked, setChecked] = useState(false);
   const [check, setCheck] = useState(false);
    const [PaymentObj, setPaymentObj] = useState([]);

    const navigation = useNavigation();
const payCon = () =>{
navigation.navigate('Confrim')
    
}
return<>
<View style={{marginVertical:50}}>


        <View >
        <View style={[{marginVertical:10,marginHorizontal:20 },style.flexRow,style.justifyContentBetween]}>
            <Text style={[style.fs2]}>debit</Text>
       <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
        
        </View>

        <View style={[{marginVertical:10,marginHorizontal:20 },style.flexRow,style.justifyContentBetween]}>
            <Text style={[style.fs2]}>credit</Text>
                   <Checkbox
      status={check ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheck(!check);
      }}
    />

        </View>
        <View style={[style.borderBlack,{borderWidth:1,margin:5},{margin:15}]}>
        <TextInput
          style={styles.inputField}
          type="email"
          placeholder="Enter name"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, name: e })}
        />
        </View>
        <View style={[style.borderBlack,{borderWidth:1,margin:5},{margin:15}]}>
        <TextInput
          style={styles.inputField}
          type="number"
          placeholder="Enter 14 digit number"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, cardnum: e })}
        />
        </View>
        <View style={[{flexDirection:'row',justifyContent:'center'}]}>
            <View style={[style.borderBlack,{borderWidth:1,width:"50%",marginHorizontal:1}]}>

            <TextInput
          style={styles.inputField}
          type="number"
          placeholder="Enter issue date"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, issuedate: e })}
          />
          </View>
          <View style={[style.borderBlack,{borderWidth:1,width:"40%",marginHorizontal:2}]}>

          <TextInput
          style={styles.inputField}
          type="number"
          placeholder="Enter Valid/to date"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, validnum: e })}
          />
          </View>
        </View>
        <View style={[style.borderBlack,{borderWidth:1,margin:5},{margin:15}]}>
        <TextInput
          style={styles.inputField}
          type="email"
          placeholder="Enter 3 digit code"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, specialnum: e })}
        />
        </View>

        </View>
        <View style={styless.payBtnMain}>
          <Button style={styless.payBtn} onPress={payCon()} title="Pay Now" />
        </View>
</View>

</>
}

const styless = StyleSheet.create({
  
  payBtn: {
    backgroundColor: '#0971f1',
    
  },

  payBtnMain: {
    marginVertical: 15,
    marginLeft: 50,
    marginRight: 50,
  },

});

export default Payment;