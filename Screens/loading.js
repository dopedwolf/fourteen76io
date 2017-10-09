import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class AppLoading extends React.Component {
  render() {
    return (
      <View style={styles.loadingScreen}>
        <Image source={require('../assets/gifs/vladsplit.gif')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: '#f2b1bd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
