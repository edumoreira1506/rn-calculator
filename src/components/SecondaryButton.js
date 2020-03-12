import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const SecondaryButton = ({
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
    backgroundColor: '#f59130',
    height: '20%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#192a38'
  },
  buttonText: {
    fontSize: 30,
    color: '#fff'
  }
});

export default SecondaryButton;
