import React from 'react';
import {Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Cstyles from './styles/common';

class Directories extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>Directories</Text>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Directories;
