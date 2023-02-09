/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

//@ts-ignore
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
//@ts-ignore
import { Authenticator } from 'aws-amplify-react-native';
import Home from './src/screens/Home';

Amplify.configure(awsconfig);

function App() {
  return (
    <View style={styles.container}>
      <Authenticator usernameAttributes='email'>
        <Home/>
      </Authenticator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
