import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Leah extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Leah Thornton"}</Text>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Pieces like It Hasn't Come Yet and John Doyle are simultaneously sparse and full of energy. The way texture is used lends a lot of that life. How would you rank texture v. color v. form in your work?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Color definitely takes precedence to texture and form. Usually I am drawn to colors/ a color palate and work from there. The texture and overall composition come about in a more organic fashion."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/leah/one.jpg"),
                require("../../../assets/images/artists/leah/two.jpg"),
                require("../../../assets/images/artists/leah/three.jpg"),
                require("../../../assets/images/artists/leah/four.jpg"),
                require("../../../assets/images/artists/leah/five.jpg"),
                require("../../../assets/images/artists/leah/six.jpg"),
                require("../../../assets/images/artists/leah/seven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Bright, pastel colors, skewed geometry, open space, deep textures, a mixture of tranquility and commotion, all pose a contrast that isn't necessarily violent, even innocent, in how naturally it falls into place. There seems to be no motive or bias in this series. Would you consider some of these pieces a sort of painted prose?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"‘Painted prose’ is an excellent way of describing these paintings. The way they fall into place is similar to a conversation- unexpectedly poetic at times, but more often than not- marks that have to be erased and painted over. But all marks become a part of the work/ story."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Where can we see this work up close?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"This weekend I'll be at Moss Rock Festival. I'm planning to do December's art crawl. Trying to set up shows elsewhere!"}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/tumblr.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://laylaspecial.tumblr.com/')}>
                      {' Layla Special'}
                    </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/adult_braces/?hl=en')}>
                      {' Adult Braces'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Leah;
