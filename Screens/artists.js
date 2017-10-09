import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';

class Artists extends React.Component {
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
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.amy()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/amya.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Amy Vaughn"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.marbles()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/mrmarbles.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Mr Marbles"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.caroline()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/caroline.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Caroline Erb"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.byron()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/byronartist.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Byron Sonnier"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.william()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/william.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"William Webb"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => Actions.sarahr()} style={Cstyles.postTouchable}>
                <View style={Cstyles.postContainer}>
                  <Image source={require('../assets/images/artists/sarah.jpg')} style={Cstyles.postImage}/>
                  <View style={Cstyles.subPostContainer}>
                    <Text style={Cstyles.postTitle}>{"Sarah Rehmert"}</Text>
                    <View style={Cstyles.postSub}>
                      <Text style={Cstyles.postSubCat}>{"Artist"}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={Cstyles.pageNav}>
                <TouchableOpacity onPress={() => Actions.artists()}>
                  <Image source={require('../assets/icons/filled.png')} style={Cstyles.filled}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.artiststwo()}>
                  <Image source={require('../assets/icons/unfilled.png')} style={Cstyles.unfilled}></Image>
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


module.exports = Artists;
