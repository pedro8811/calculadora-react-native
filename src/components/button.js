import {} from 'react';
import { StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native';

export default function Button(props) {
  const buttonStyles = [styles.btn];
  if (props.double) {
    buttonStyles.push(styles.doubleBtn);
  }
  if (props.operation) {
    buttonStyles.push(styles.operationBtn);
  }
  if (props.clear) {
    buttonStyles.push(styles.clearBtn);
  }
  if (props.disabled) {
    buttonStyles.push(styles.disabled);
  }
  return (
    <TouchableHighlight disabled={props.disabled} onPress={props.onPress}>
      <Text style={buttonStyles}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btn: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#333',
    border: 'none',
    borderRadius: 60,
    alignContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  operationBtn: {
    backgroundColor: 'orange',
    color: '#fff',
  },
  clearBtn: {
    backgroundColor: '#777',
  },
  doubleBtn: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  disabled: {
    backgroundColor: '#aaa',
    color: '#ccc',
  },
});
