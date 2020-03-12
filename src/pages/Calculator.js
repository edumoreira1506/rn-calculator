import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../components/Display';

const Calculator = () => {
  const [ content, setContent ] = useState('1 + 1 = 2');

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.displayContainer}>
        <Display content={content} />
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
  }
});

export default Calculator;
