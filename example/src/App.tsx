import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { OutlinedTextView } from 'react-native-outlined-text';

export default function App() {
  return (
    <View style={styles.container}>
      <OutlinedTextView
        defaultTextColor={'#00ddff'}
        outlineColor={'#FF0000'}
        outlineWidth={10}
        shadowWidth={5}
        text={'Play SETTINGS ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
        textSize={40}
        style={styles.innerText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  innerText: {
    alignSelf: 'center',
    backgroundColor: '#00FF00',
    height: 200,
    width: '100%',
  },
});
