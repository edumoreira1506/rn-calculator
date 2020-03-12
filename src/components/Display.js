import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ content }) => (
  <View style={styles.display}>
    <Text style={styles.text}>
      { content }
    </Text>
  </View>
);

const styles = StyleSheet.create({
  display: {
    width: '100%',
    height: '100%',
    backgroundColor: '#192a38',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  text: {
    color: '#fff',
    fontSize: 45,
    marginRight: 15,
    marginBottom: 15
  }
});

export default Display;
