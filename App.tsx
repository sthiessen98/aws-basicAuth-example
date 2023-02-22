/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

//@ts-ignore
import Navigation from './src/components/Navigation';
import { View } from 'react-native';
import Authentication from './src/components/Authentication';

function App() {
  return (
    <View style={styles.container}>
      <Authentication/>
      <Navigation/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    backgroundColor: 'white',
  }
}

export default App;
