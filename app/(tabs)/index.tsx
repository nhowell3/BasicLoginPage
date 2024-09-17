import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  //setIsLogin(false);

  function isStrValid(str: string){
    if (str){
      if (str != ''){
        return true;
      }
    }
    return false;
  }

  const handleSubmit = () => {
    if (isStrValid(email) && isStrValid(password)){
      if (isLogin){
        setMessage("Login Attempted");
        return;
      }
      if (isStrValid(firstName) && isStrValid(lastName)){
        setMessage("Sign up successful");
        return;
      }
    }
    setMessage("Please fill out all fields.");
  };

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>

      {!isLogin &&
      <View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
        />
      </View>
      }
      <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
      <View style={styles.button}>
        <Button title={isLogin ? "Login" : "Sign up"} onPress={handleSubmit} />
      </View>
      <View style={styles.button}>
        <Button title={isLogin ? "SWITCH TO SIGN UP" : "SWITCH TO LOGIN"} onPress={handleSwitch}/>
      </View>
      {message && <Text style={styles.validationText}>{message}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '80%',
    margin: 'auto',
    marginBottom: 12,
    marginTop: 12,
    paddingLeft: 8,
  },
  button: {
    width: '50%',
    margin: 'auto',
    marginTop: 12,
    marginBottom: 12,
  },
  validationText: {
    textAlign: 'center',
    fontSize: 18
  }
});
