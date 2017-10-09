import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';

class PhotoTwo extends React.Component {
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
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.ireland()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/ireland.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Ireland"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Rachel McElroy"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.newyork()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/victoria.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"New York City Perspectives"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Victoria Vrublevska"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.gumbo()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/gumbo.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Gumbo Gala"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Lee Panter"}</Text>
                    <Text style={Cstyles.postSubCat}>{"2017"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.pride()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/pride.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Pride Parade and Fest"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Mateo Montoya"}</Text>
                    <Text style={Cstyles.postSubCat}>{"2017"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.thomashall()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/thomas.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Thomas Hall"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Photo Story"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.milestwist()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/miles.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Miles Twist"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Photo Story"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.yoavpelli()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/photography/yoav.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Yoav Pelli"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Photo Story"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.endangeredspecies()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/photography/endangered.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Endangered Species"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Josh Ethan Johnson"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={Cstyles.pageNav}>
                <TouchableOpacity onPress={() => Actions.photo()}>
                  <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.phototwo()}>
                  <Image source={require('../assets/icons/filled.png')} style={Cstyles.filled}></Image>
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


module.exports = PhotoTwo;
