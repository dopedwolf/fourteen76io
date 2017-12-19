import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Rachel extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Rachel M Ejem"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/rachelhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How would you describe moving from a world of objectivity to subjectivity?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"In the world of objectivity (science), there is a clear boundary between what is right and wrong. In humanities, this divide is less concrete. Certain theories and principals are held to be true, but all are subject to individual interpretations."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/rachelart/one.jpg"),
                require("../../../assets/images/artists/rachelart/two.jpg"),
                require("../../../assets/images/artists/rachelart/three.jpg"),
                require("../../../assets/images/artists/rachelart/four.jpg"),
                require("../../../assets/images/artists/rachelart/five.jpg"),
                require("../../../assets/images/artists/rachelart/six.jpg"),
                require("../../../assets/images/artists/rachelart/seven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"In a couple of pieces, you use fractals in your geometric patterns and juxtapose them with silhouettes. Could you give us a little more understanding on that? A bridging of personal chaos with structured expression perhaps?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"My artwork is autobiographical, but it has a universal message. This message addresses issues of vulnerability and endurance, destruction and repair. The silhouette conceals almost every aspect of a human’s identity and is a general representation of the human form. The geometric patterns construct an irregular grid. In my work, I choose to deconstruct the rigid connotation of the grid."}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://rachelmejem.com/')}>
                      {' rachelmejem.com'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Rachel;
