import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../components/Display';
import NormalButton from '../components/NormalButton';
import SecondaryButton from '../components/SecondaryButton';
import BigNormalButton from '../components/BigNormalButton';

const Calculator = () => {
  const [ content, setContent ] = useState('1 + 1 = 2');

  const exampleOnClick = () => console.log('clicked!');

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.displayContainer}>
        <Display content={content} />
      </View>
      <View style={styles.buttonsContainer}>
        <NormalButton
          onClick={exampleOnClick}
          text="AC"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="#"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="#"
        />
        <SecondaryButton
          onClick={exampleOnClick}
          text="/"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="7"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="8"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="9"
        />
        <SecondaryButton
          onClick={exampleOnClick}
          text="*"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="4"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="5"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="6"
        />
        <SecondaryButton
          onClick={exampleOnClick}
          text="-"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="1"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="2"
        />
        <NormalButton
          onClick={exampleOnClick}
          text="3"
        />
        <SecondaryButton
          onClick={exampleOnClick}
          text="+"
        />
        <BigNormalButton
          onClick={exampleOnClick}
          text="0"
        />
        <NormalButton
          onClick={exampleOnClick}
          text=","
        />
        <SecondaryButton
          onClick={exampleOnClick}
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
