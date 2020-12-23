import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const Select = () => {
  return (
    <View>
      <Text style={styles.label}>City</Text>
      <View style={styles.input}>
        <Picker
            // selectedValue={this.state.language}
            // style={{height: 50, width: 100}}
            // onValueChange={(itemValue, itemIndex) =>
            //   this.setState({language: itemValue})
            // }
            >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>

      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
    label : {fontSize : 14 , fontFamily : 'Poppins-Regular' , color:'#020202'},
    input : {borderWidth : 1 , borderColor : '#020202' , borderRadius : 8 , paddingHorizontal : 2 , paddingVertical: 0}
});
