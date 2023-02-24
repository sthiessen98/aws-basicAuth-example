/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';

//@ts-ignore
import Navigation from './src/components/Navigation';
import  Account  from './src/components/Account';

function App() {
  
  return (
    <Account>
        <Navigation/>
    </Account>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    backgroundColor: 'white'
  }
}

export default App;
