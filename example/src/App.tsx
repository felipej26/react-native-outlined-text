import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { OutlinedTextView } from 'react-native-outlined-text';

export default function App() {
  return (
    <View style={styles.container}>
      <OutlinedTextView
        outlineColor="#FF0000"
        outlineWidth={4}
        textSize={20}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          backgroundColor: '#00FF00',
          width: '100%',
          height: 30,
          // padding: 10,
          // alignContent: 'center',
          // justifyContent: 'center',
          // alignItems: 'center',
          alignSelf: 'center',
        }}
        text={'T E S T E Roboto'}
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
