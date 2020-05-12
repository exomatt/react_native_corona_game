import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Result = ({route}) => {
  const navigation = useNavigation();
  const {result} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {pkt} points.</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          route.params.updateData();
          navigation.goBack();
        }}>
        <Text style={styles.text}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3dcdc',
  },
  text: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontSize: 40,
    textAlign: 'center',
  },
});
export default Result;
