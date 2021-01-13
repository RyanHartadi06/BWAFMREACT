import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Button, Gap, TextInput, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subtitle="Make sure it's valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="Phone No." pl="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" pl="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." pl="Type your house number" />
        <Gap height={16} />
        <Select />
        <Gap height={24} />
        <Button
          title="Sign Up Now"
          onPress={() => navigation.navigate('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
