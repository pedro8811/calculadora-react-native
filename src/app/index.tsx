import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Display from '../components/display';
import Button from '../components/button';

// import { RiDivideFill } from 'react-icons/ri';
// import { RxCross2 } from 'react-icons/rx';
// import { FaCalculator, FaPlus } from 'react-icons/fa6';
// import { FaMinus, FaBackspace } from 'react-icons/fa';

export default function Index() {
  // const [operacao, setOperacao] = useState(0);
  // const [resultado, setResultado] = useState();
  const [state, setState] = useState({
    valorTela: '',
    resultado: '',
    operado: false,
    ponto: false,
  });

  const addValue = (d: string | number) => {
    let newState = { ...state };

    if (d == '+' || d == '-' || d == '/' || d == '*') {
      newState.ponto = false;
    }

    if (
      (d == '+' || d == '-' || d == '/' || d == '*') &&
      state.operado == true
    ) {
      newState.valorTela = state.resultado;
      newState.resultado = '';
    }

    if (d == '.') {
      newState.ponto = true;
    }

    newState.valorTela = state.valorTela + d;

    setState(newState);
  };

  const clearState = () => {
    setState({
      valorTela: '',
      resultado: String(0),
      operado: false,
      ponto: false,
    });
  };

  const operate = (s: string) => {
    if (s == 'AC') {
      clearState();
      return;
    }
    if (s == 'BS') {
      const vt = state.valorTela.substring(0, state.valorTela.length - 1);
      setState({
        ...state,
        valorTela: vt,
      });
      return;
    }
    try {
      setState({
        ...state,
        operado: true,
        ponto: false,
        resultado: eval(state.valorTela),
      });
    } catch (err) {
      setState({
        ...state,
        operado: true,
        resultado: 'Erro',
      });
      console.log(err);
    }
  };

  const lastValue = state.valorTela[state.valorTela.length - 1];
  const operator =
    lastValue == '+' ||
    lastValue == '-' ||
    lastValue == '/' ||
    lastValue == '*' ||
    lastValue == null;

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <Display valor={state.valorTela} result={state.resultado} />
      <View style={styles.botoes}>
        <Button
          disabled={!state.valorTela}
          onPress={() => operate('AC')}
          clear
          label='AC'
        ></Button>
        <Button
          disabled={!state.valorTela}
          onPress={() => operate('BS')}
          clear
          label={'bs'}
        ></Button>
        <Button onPress={() => addValue('%')} clear label='%'></Button>
        <Button
          onPress={() => addValue('/')}
          operation
          disabled={operator}
          label={'/'}
        ></Button>
        <Button onPress={() => addValue(7)} label='7'></Button>
        <Button onPress={() => addValue(8)} label='8'></Button>
        <Button onPress={() => addValue(9)} label='9'></Button>
        <Button
          onPress={() => addValue('*')}
          operation
          disabled={operator}
          label={'X'}
        ></Button>
        <Button onPress={() => addValue(4)} label='4'></Button>
        <Button onPress={() => addValue(5)} label='5'></Button>
        <Button onPress={() => addValue(6)} label='6'></Button>
        <Button
          onPress={() => addValue('-')}
          operation
          disabled={operator}
          label={'-'}
        ></Button>
        <Button onPress={() => addValue(1)} label='1'></Button>
        <Button onPress={() => addValue(2)} label='2'></Button>
        <Button onPress={() => addValue(3)} label='3'></Button>
        <Button
          onPress={() => addValue('+')}
          operation
          disabled={operator}
          label={'+'}
        ></Button>
        <Button label={'c'}></Button>
        <Button onPress={() => addValue(0)} label='0'></Button>
        <Button
          onPress={() => addValue('.')}
          disabled={state.ponto}
          label=','
        ></Button>
        <Button onPress={() => operate('=')} operation label='='></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
