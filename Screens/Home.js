import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image , ActivityIndicator, Linking} from 'react-native';
import Cstyles from './styles/common';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    loading: true,
    error: false,
  }
  componentDidMount = async () => {
    try {
      setTimeout(() => {this.setState({loading: false})}, 1500)
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
          <Text>Error loading Posts!</Text>
        </View>
      )
    }
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.pageContainer}>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.weareone()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/other/weareone.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Artist to Artist Auction"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"February 23rd"}</Text>
                      <Text style={Cstyles.postSubCat}>{"SUBMIT YOUR ART FOR FREE!"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Linking.openURL('https://crisiscenterbham.org/sexual-assault-services/sexual-assault-services.htm/')} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/other/crisis.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Birmingham Crisis Center"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"24 Hour Hotline"}</Text>
                      <Text style={Cstyles.postSubCat}>{"(205) 323-7736"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.timepretend()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/timepretend/home.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Time to Pretend"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"David Macias Navarro"}</Text>
                      <Text style={Cstyles.postSubCat}>{"Photo Essay"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.shame()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/music/shamethumb.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Shame"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Elliott Moe"}</Text>
                      <Text style={Cstyles.postSubCat}>{"Music"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.snow()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/snowthumb.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Snow Day"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Mateo Montoya"}</Text>
                      <Text style={Cstyles.postSubCat}>{"Photo Story"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.cindy()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/music/cindythumb.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Cindy Wilson"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Blake Ells"}</Text>
                      <Text style={Cstyles.postSubCat}>{"Interview"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.twelve()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/twelve/twelvethumb.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Twelve Weeks of Winter"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Antonio Rodriguez"}</Text>
                      <Text style={Cstyles.postSubCat}>{"Photo Story"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.ytg()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/music/ygt/home.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Young The Giant"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Mary Fehr"}</Text>
                      <Text style={Cstyles.postSubCat}>{"Seattle"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.upperRoom()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/upper.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"In The Upper Room"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Nicola Walls"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.merrilee()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/merrilee.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Merrilee Chaliss"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
    );
  }
}
module.exports = Home;
