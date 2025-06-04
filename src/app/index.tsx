import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setCustomText } from 'react-native-global-props';

import Display from '../components/display';
import Button from '../components/button';

// import { RiDivideFill } from 'react-icons/ri';
// import { RxCross2 } from 'react-icons/rx';
// import { FaCalculator, FaPlus } from 'react-icons/fa6';
// import { FaMinus, FaBackspace } from 'react-icons/fa';

setCustomText({
  style: {
    fontFamily: 'sans-serif',
  },
});

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
    if ((d == '+' || d == '-' || d == '/' || d == '*') && state.operado) {
      setState({
        ...state,
        valorTela: state.resultado,
        resultado: String(0),
      });
    }
    setState({
      ...state,
      valorTela: state.valorTela + d,
    });
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

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <Display valor={state.valorTela} result={state.resultado} />
      <View style={styles.botoes}>
        <Button onPress={() => operate('AC')} clear label='AC'></Button>
        <Button
          onPress={() => operate('BS')}
          clear
          // label={<FaBackspace />}
          label={'bs'}
        ></Button>
        <Button clear label='%'></Button>
        <Button
          onPress={() => addValue('/')}
          operation
          // label={<RiDivideFill />}
          label={'/'}
        ></Button>
        <Button onPress={() => addValue(7)} label='7'></Button>
        <Button onPress={() => addValue(8)} label='8'></Button>
        <Button onPress={() => addValue(9)} label='9'></Button>
        <Button
          onPress={() => addValue('*')}
          operation
          // label={<RxCross2 fontSize={30} />}
          label={'X'}
        ></Button>
        <Button onPress={() => addValue(4)} label='4'></Button>
        <Button onPress={() => addValue(5)} label='5'></Button>
        <Button onPress={() => addValue(6)} label='6'></Button>
        <Button
          onPress={() => addValue('-')}
          operation
          // label={<FaMinus fontSize={30} />}
          label={'-'}
        ></Button>
        <Button onPress={() => addValue(1)} label='1'></Button>
        <Button onPress={() => addValue(2)} label='2'></Button>
        <Button onPress={() => addValue(3)} label='3'></Button>
        <Button
          onPress={() => addValue('+')}
          operation
          // label={<FaPlus fontSize={30} />}
          label={'+'}
        ></Button>
        <Button label={'c'}></Button>
        <Button label='0'></Button>
        <Button disabled={state.ponto} label='.'></Button>
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
