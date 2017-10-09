import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';

class Photo extends React.Component {
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
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.gon()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/gon.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"'Gon"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Jonathan Patrick"}</Text>
                    <Text style={Cstyles.postSubCat}>{"Photography"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.dietrying()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/die.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"DIE TRYING"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Sniper Streets"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.sandlings()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/sandlings.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Sandlings"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Alastair Bartlett"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.lostlands()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/lostlands.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Lost Lands"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Bryan Atkinson"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.crackerpackers()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/crackerpacker.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Cracker Packer"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Matthew MacPake"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.themalverns()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/malverns.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"The Malverns"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Ted Homer"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.nonames()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/tyron.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Where The Streets Have No Names"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Tyron Hug"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
                <View style={Cstyles.pageNav}>
                  <TouchableOpacity onPress={() => Actions.photo()}>
                    <Image source={require('../assets/icons/filled.png')} style={Cstyles.filled}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Actions.phototwo()}>
                    <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Actions.photothree()}>
                    <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Actions.photofour()}>
                    <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
                  </TouchableOpacity>
                </View>
          </View>
        </ScrollView>
    </View>
    )
  }
}


module.exports = Photo;
