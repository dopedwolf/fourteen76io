import React from 'react';
import Expo from 'expo';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import {Font, AppLoading} from 'expo';
import MainApp from './Navigation/router';


function cacheImages(images) {
  return images.map(image => {
    if(typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Expo.Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Expo.Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };
  componentWillMount() {
    this._loadAssestsAsync();
  }
  render() {
    if (!this.state.appIsReady) {
      return (
        <AppLoading
          startAsync={this._loadAssestsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
    );
    } else {
      return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            {Platform.OS === 'android' &&
              <View style={styles.statusBarUnderlay} />}
              <MainApp/>
          </View>
      );
    }
  }
  async _loadAssestsAsync() {
      const imageAssets = cacheImages([
        require('./assets/gifs/vlad.png'),
        require('./assets/gifs/vladsplit.svg'),
        require('./assets/icons/calendar.png'),
        require('./assets/icons/exit2.png'),
        require('./assets/icons/home.png'),
        require('./assets/icons/menu.png'),
        require('./assets/icons/facebook.png'),
        require('./assets/icons/tube.png'),
        require('./assets/icons/insta.png'),
        require('./assets/icons/loadmore.png'),
        require('./assets/icons/filled.png'),
        require('./assets/icons/unfilled.png'),
        require('./assets/icons/back.png'),
        require('./assets/icons/website.png'),
        require('./assets/icons/tumblr.png'),
        require('./assets/icons/email.png'),
      ]);
      const fontAssets = cacheFonts([
          {'Alegreya-light': require('./assets/fonts/AlegreyaSans-Light.ttf')},
          {'Alegreya-Bold': require('./assets/fonts/Alegreya-Bold.ttf')},
          {'Alegreya-BoldItalic': require('./assets/fonts/Alegreya-BoldItalic.ttf')},
          {'Alegreya-italic': require('./assets/fonts/Alegreya-Italic.ttf')},
          {'Alegreya-regular': require('./assets/fonts/Alegreya-Regular.ttf')},
          {'LoraBold': require('./assets/fonts/Lora-Bold.ttf')},
          {'LoraBoldItalic': require('./assets/fonts/Lora-BoldItalic.ttf')},
      ]);
      await Promise.all([
        ...imageAssets,
        ...fontAssets,
      ]);
      this.setState({appIsReady: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  }
});
