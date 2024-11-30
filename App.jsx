import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={[{backgroundColor: 'green'}, {fontSize: 100}]}>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
