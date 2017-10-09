import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';

class Music extends React.Component {
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
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.psychic()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/music/psychic.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"PSYCHIC HOTLINE"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Ahmad Jackson"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.balloons()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/music/deadballoons.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitleItalic}>Dead Balloons</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Album by Dead Balloons"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.lostsloss()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/music/sloss.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>Lost In The Sloss</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Elliott Moe"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.sleepdrive()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/music/sleepdrive.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitleItalic}>Sleep Drive</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Album by Ant'lrd"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.marriage()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/music/tyler.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitleItalic}>Marriage</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Album by Tyler Holmes"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={Cstyles.pageNav}>
              <TouchableOpacity onPress={() => Actions.music()}>
                <Image source={require('../assets/icons/filled.png')} style={Cstyles.filled}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.musictwo()}>
                <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Music;
