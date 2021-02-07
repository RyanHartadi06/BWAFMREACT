import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, TextInput} from '../../components';
import {Header} from '../../components/molecules';
import {isLoading, signInAction} from '../../redux/action';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  // const [email , setEmail] = useState('');
  // const [password , setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };
  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best meal" />
      <View style={styles.container}>
        <TextInput
          label="Email"
          pl="Type your email address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          pl="Type your password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button title="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          color="#8D92A3"
          txtcolor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
