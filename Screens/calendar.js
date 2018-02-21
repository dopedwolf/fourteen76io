import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';
import CalendarEvent from './calendarEvent';


class Calendar extends React.Component {
    constructor(){
      super()
      this.state = {
        data: [],
        loading: true,
        error: false,
        fetchUrl: 'http://www.fourteen76.com/events',
        filterText1: 'white',
        oneFilter: "#f2b1bd",
        filterText2: 'black',
        twoFilter: "white",
        filterText3: 'black',
        threeFilter: "white",
        filterText4: 'black',
        fourFilter: "white",
      }
    }
    getEvents(){
      return fetch(this.state.fetchUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson.obj})
            })
            .catch((error) => {
              console.error(error);
            })
    }
    allFilter = () => {
      this.setState({
        fetchUrl: "http://www.fourteen76.com/events",
        filterText1: 'white',
        oneFilter: "#f2b1bd",
        filterText2: 'black',
        twoFilter: "white",
        filterText3: 'black',
        threeFilter: "white",
        filterText4: 'black',
        fourFilter: "white",
      })
    }
    artsFilter = () => {
      this.setState({
        fetchUrl: "http://www.fourteen76.com/events/arts",
        filterText1: 'black',
        oneFilter: "white",
        filterText2: 'white',
        twoFilter: "#cadfc0",
        filterText3: 'black',
        threeFilter: "white",
        filterText4: 'black',
        fourFilter: "white",
      })
    }
    musicFilter = () => {
      this.setState({
        fetchUrl: "http://www.fourteen76.com/events/music",
        filterText1: 'black',
        oneFilter: "white",
        filterText2: 'black',
        twoFilter: "white",
        filterText3: 'white',
        threeFilter: "#f2cafd",
        filterText4: 'black',
        fourFilter: "white",
      })
    }
    communityFilter = () => {
      this.setState({
        fetchUrl: "http://www.fourteen76.com/events/community",
        filterText1: 'black',
        oneFilter: "white",
        filterText2: 'black',
        twoFilter: "white",
        filterText3: 'black',
        threeFilter: "white",
        filterText4: 'white',
        fourFilter: "#bce1fe",
      })
    }
    componentWillMount() {
      this.getEvents();
    }
    componentDidUpdate(){
      this.getEvents();
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
      } return (
        <View style={Cstyles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Cstyles.pageContainer}>
              <View style={Cstyles.filter}>
                <View style={Cstyles.calendarFiltering}>
                  <View style={[Cstyles.calendarFilter, {backgroundColor: this.state.oneFilter}]}>
                    <TouchableOpacity onPress={this.allFilter}><Text style={[Cstyles.filterText, {color: this.state.filterText1}]}>All</Text></TouchableOpacity>
                  </View>
                  <View style={[Cstyles.calendarFilter, {backgroundColor: this.state.twoFilter}]}>
                    <TouchableOpacity onPress={this.artsFilter}><Text style={[Cstyles.filterText, {color: this.state.filterText2}]}>Arts</Text></TouchableOpacity>
                  </View>
                </View>
                <View style={Cstyles.calendarFiltering}>
                  <View style={[Cstyles.calendarFilter, {backgroundColor: this.state.threeFilter}]}>
                    <TouchableOpacity onPress={this.musicFilter}><Text style={[Cstyles.filterText, {color: this.state.filterText3}]}>Music</Text></TouchableOpacity>
                  </View>
                  <View style={[Cstyles.calendarFilter, {backgroundColor: this.state.fourFilter}]}>
                    <TouchableOpacity onPress={this.communityFilter}><Text style={[Cstyles.filterText, {color: this.state.filterText4}]}>Community</Text></TouchableOpacity>
                  </View>
                </View>
              </View>
              <CalendarEvent data={this.state.data}/>
            </View>
          </ScrollView>
        </View>
      );
    }
  }


module.exports = Calendar;
