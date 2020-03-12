import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Display from '../components/Display';
import NormalButton from '../components/NormalButton';
import SecondaryButton from '../components/SecondaryButton';
import BigNormalButton from '../components/BigNormalButton';
import * as CalculatorModel from '../services/calculator';

const Calculator = () => {
  const [ values, setValues ] = useState(CalculatorModel.setup());
  const [ showResult, setShowResult ] = useState(false);

  const handleClearCalculator = () => {
    setValues(CalculatorModel.setup());
    setShowResult(false);
  }

  const handleAddOperator = operator => {
    CalculatorModel.validateOperator(operator, values, {
      onSuccess: setValues,
      onError: Alert.alert
    });
  }

  const handleAddNumber = number => {
    CalculatorModel.validateNumber(number, values, {
      onSuccess: setValues,
      onError: Alert.alert
    });
  }

  const handleAddFloat = () => {
    CalculatorModel.validateFloat(values, {
      onSuccess: setValues,
      onError: Alert.alert
    });
  }

  const handleShowResult = () => {
    setShowResult(true);
  }

  const display = showResult ? CalculatorModel.getResult(values) : CalculatorModel.getOperation(values);

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.displayContainer}>
        <Display content={display} />
      </View>
      <View style={styles.buttonsContainer}>
        <BigNormalButton
          onClick={handleClearCalculator}
          text="AC"
        />
        <NormalButton
          onClick={() => handleAddOperator('%')}
          text="%"
        />
        <SecondaryButton
          onClick={() => handleAddOperator('/')}
          text="/"
        />
        <NormalButton
          onClick={() => handleAddNumber(7)}
          text="7"
        />
        <NormalButton
          onClick={() => handleAddNumber(8)}
          text="8"
        />
        <NormalButton
          onClick={() => handleAddNumber(9)}
          text="9"
        />
        <SecondaryButton
          onClick={() => handleAddOperator('*')}
          text="*"
        />
        <NormalButton
          onClick={() => handleAddNumber(4)}
          text="4"
        />
        <NormalButton
          onClick={() => handleAddNumber(5)}
          text="5"
        />
        <NormalButton
          onClick={() => handleAddNumber(6)}
          text="6"
        />
        <SecondaryButton
          onClick={() => handleAddOperator('-')}
          text="-"
        />
        <NormalButton
          onClick={() => handleAddNumber(1)}
          text="1"
        />
        <NormalButton
          onClick={() => handleAddNumber(2)}
          text="2"
        />
        <NormalButton
          onClick={() => handleAddNumber(3)}
          text="3"
        />
        <SecondaryButton
          onClick={() => handleAddOperator('+')}
          text="+"
        />
        <BigNormalButton
          onClick={() => handleAddNumber(0)}
          text="0"
        />
        <NormalButton
          onClick={handleAddFloat}
          text="."
        />
        <SecondaryButton
          onClick={handleShowResult}
          text="="
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  displayContainer: {
    display: 'flex',
    width: '100%',
    height: '25%',
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '75%',
    width: '100%',
    flexDirection: 'row'
  }
});

export default Calculator;
