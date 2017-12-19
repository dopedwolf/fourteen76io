import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Photoday extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"'Photoday"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Jonathan Patrick</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/gon/five.jpg"),
                require("../../../assets/images/photography/gon/one.jpg"),
                require("../../../assets/images/photography/gon/two.jpg"),
                require("../../../assets/images/photography/gon/three.jpg"),
                require("../../../assets/images/photography/gon/four.jpg"),
                require("../../../assets/images/photography/gon/six.jpg"),
                require("../../../assets/images/photography/gon/seven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"Taken in Oregon during the summer of 2016. A typically American foray through the monolithic beauty in this land. Some of the life captured in these shots has suffered severe damage due to forest fires in the past week, namely those of the Columbia River Gorge. Amidst wildfires on the west coast, Hurricane Harvey, other forecasted natural catastrophes, and the ruling political party actively denying the proven science of climate change, one could ask, will the American road trip remain so typical when there's nothing left to see?"}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>{"Regardless of whether a freak teenager fireworks accident or climate change is to blame, both cases point to the same collective negligence of an environment dwindling brightly before our eyes. See it while you can and then die. It's either that or do something about it."}</Text>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Photoday;
