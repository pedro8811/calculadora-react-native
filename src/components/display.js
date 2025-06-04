import {} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Display(props) {
  return (
    <View style={styles.display}>
      <Text style={styles.textOperacao} numberOfLines={1}>
        {props.valor}
      </Text>
      <Text style={styles.textResultado} numberOfLines={1}>
        {props.result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'end',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    width: '100%',
  },
  textResultado: {
    fontSize: 50,
    color: '#fff',
  },
  textOperacao: {
    fontSize: 35,
    color: '#fff',
  },
});
