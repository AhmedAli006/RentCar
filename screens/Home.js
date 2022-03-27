import React, {useEffect, useState} from 'react';
import styles from '../styling';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';
import Cards from '../components/Cards';
const style = StyleSheet.create(styles);

import axios from 'axios';

const HomeScreen = () => {

  // const apiCal = () => {
  //   axios
  //     .get('http://192.168.50.204:5000/users')
  //     .then(res => {
  //       console.log('Res', res.data);
  //     })
  //     .catch(rej => {
  //       console.log('Error --> ', rej);
  //     });
  // };

  // const postApi = () => {
  //   axios
  //     .post('http://192.168.50.204:5000/users', {})
  //     .then(res => {
  //       console.log('Res', res);
  //     })
  //     .catch(rej => {
  //       console.log('Error --> ', rej);
  //     });
  // };

  // useEffect(() => {
  //   // apiCal();
  //   // postApi();
  // }, []);

  return (
    <>
      <ScrollView>
    
        <View style={style.navbar}>
          <Text style={[style.fs3, style.textBold, style.p2, style.textWhite]}>
            Catagories
          </Text>
        </View>
      <View >

         
        <Cards
          url="https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg"
          name="toyota"
          type="standerd"
          price="198"
        />
          <Cards
            url="https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/392ade27844543908da0ad884891187e.jpg"
            name="audi"
            type="bussines"
            price="788"
          />
        <Cards
          url="https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg"
          name="honda"
          type="economy"
          price="198"
        />
        <Cards
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlF_AWBFa8BAzalNrOqYw25Tzkk4zmOFLPu5WH-1j1QYKZjMg49iznnKR_-7j4kClCR0k&usqp=CAU"
          name="honda"
          type="standerd"
          price="621"
        />
        <Cards
          url="https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg"
          name="toyota"
          type="standerd"
          price="258"
          />
          </View>
      </ScrollView>
       
    </>
  );
};
export default HomeScreen;