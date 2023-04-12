import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { OutlinedTextView } from 'react-native-outlined-text';

export default function App() {
  return (
    <View style={styles.container}>
      <OutlinedTextView
        outlineWidth={10}
        textSize={40}
        shadowWidth={5}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          backgroundColor: '#00FF00',
          width: '100%',
          height: 200,
          alignSelf: 'center',
        }}
        text={'Play SETTINGS ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
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
});
