import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Signin = () => {
    const navigation = useNavigation();
  const [Obj, setObj] = useState([]);

  function signin() {
    // axios
    //   .post('http://192.168.50.204:5000/users', {Obj})
    //   .then(res => {
    //     console.log('Res', res.data);
    //   })
    //   .catch(rej => {
    //     console.log('Error --> ', rej);
    //   });
        navigation.navigate('Home')
  }

//     useEffect(() => {
// //   apiCal();
//   postApi();
//   }, []);
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>SIGNIN</Text>
          <Text style={styles.dash}>_</Text>
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Enter Username"
            onChangeText={e => setObj({...Obj, name: e})}
          />
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Contact Number"
            onChangeText={e => setObj({...Obj, contactNumber: e})}
          />
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Address"
            onChangeText={e => setObj({...Obj, address: e})}
          />
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Enter email"
            onChangeText={e => setObj({...Obj, email: e})}
          />
          <TextInput
            style={styles.inputField}
            secureTextEntry
            textContentType="password"
            placeholder="Enter Password"
            onChangeText={e => setObj({...Obj, password: e})}
          />
        </View>
        <View style={styles.loginBtnMain}>
          <Button style={styles.loginBtn} onPress={signin} title="Signin" />
        </View>

        <View>
          <Text style={styles.bottomText}>
            don't have an account <Text style={styles.link}>Signup</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0971f1',
    marginLeft: 50,
    marginRight: 50,
  },
  dash: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#0971f1',
    marginBottom: 10,
    marginTop: -20,
    marginLeft: 50,
    marginRight: 50,
  },
  inputField: {
    paddingVertical: 11,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#d3d3d3',
    marginVertical: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  loginBtn: {
    backgroundColor: '#0971f1',
  },

  loginBtnMain: {
    marginVertical: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  bottomText: {
    marginTop: 20,
    color: 'gray',
    marginLeft: 50,
    marginRight: 50,
  },
  link: {
    color: '#0971f1',
  },
});

export default Signin;