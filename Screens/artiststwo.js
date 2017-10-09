import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';

class ArtistsThree extends React.Component {
  state = {
    loading: true,
    error: false,
  }
  componentDidMount = async () => {
    try {
      setTimeout(() => {this.setState({loading: false})}, 2000)
    } catch(e) {
      this.setState({loading: false, error: true})
    }
  }
  render() {
    const{loading, error} = this.state
    if(loading) {
      return (
        <View style={Cstyles.container}>
          <ActivityIndicator animating={true} color={'#f2b1bd'}/>
        </View>
      )
    }
    if(error){
      return(
        <View style={Cstyles.container}>
          <Text>Error loading Events!</Text>
        </View>
      )
    }
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.pageContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.kat()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/artists/kat.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Kat Tracey"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.chris()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/artists/chrissacco.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"C.D. Sacco"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.katelyn()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/katelyn.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Katelyn Ledford"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.reed()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/cartoons.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Reed Randolph"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.rizzo()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/rizzo.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Rizzo"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.gaijin()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/gaijin.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Gaijin X"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.hannah()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/hannah.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Hannah Barrett"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={Cstyles.pageNav}>
                <TouchableOpacity onPress={() => Actions.artists()}>
                  <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.artiststwo()}>
                  <Image source={require('../assets/icons/filled.png')} style={Cstyles.filled}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.artiststhree()}>
                  <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.artistsfour()}>
                  <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
                </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
    </View>
    )
  }
}


module.exports = ArtistsThree;
