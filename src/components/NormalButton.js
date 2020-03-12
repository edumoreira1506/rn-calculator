import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const NormalButton = ({
  onClick,
  text,
}) => (
  <TouchableHighlight
    onPress={onClick}
    style={styles.buttonContainer}
  >
    <Text style={styles.buttonText}>
      { text }
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dee1e1',
    height: '20%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#192a38'
  },
  buttonText: {
    fontSize: 30,
    color: '#192a38',
  }
});

export default NormalButton;
