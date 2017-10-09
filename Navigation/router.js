var React = require('react');
import {View, Image, TouchableOpacity} from 'react-native';
import Cstyles from '../Screens/styles/common';
import {Router, Scene, Modal} from 'react-native-router-flux';

//main pages
import Home from '../Screens/Home';
import Calendar from '../Screens/calendar';
import MainTabBar from './menu';
import PopMenu from '../Screens/popMenu';
import popMenuTab from '../Screens/popMenuTab';
import Artists from '../Screens/artists';
import ArtistsTwo from '../Screens/artiststwo';
import ArtistsThree from '../Screens/artiststhree';
import ArtistsFour from '../Screens/artistsfour';
import Photo from '../Screens/photo';
import Food from '../Screens/food';
import Music from '../Screens/music';
import MusicTwo from '../Screens/musictwo'
import Directories from '../Screens/directories';
import ElsePage from '../Screens/else';
import PhotoTwo from '../Screens/phototwo';
import PhotoThree from '../Screens/photothree';
import PhotoFour from '../Screens/photofour';
import Contact from '../Screens/contact';
//Articles
import UpperRoom from '../Screens/Posts/Articles/upperRoom';
import Erotica from '../Screens/Posts/Articles/erotica';
import Carrigans from '../Screens/Posts/Articles/carrigans';
import Heirloom from '../Screens/Posts/Articles/heirloom';
import Pho from '../Screens/Posts/Articles/pho';
import Lewis from '../Screens/Posts/Articles/lewis';
import Blood from '../Screens/Posts/Articles/blood';
//Music
import Psychic from '../Screens/Posts/Music/psychic';
import SleepDrive from '../Screens/Posts/Music/sleepdrive';
import Balloons from '../Screens/Posts/Music/deadballoons'
import LostSloss from '../Screens/Posts/Music/lostsloss';
import Marriage from '../Screens/Posts/Music/marriage';
import Gag from '../Screens/Posts/Music/gag';
import LaundryPunk from '../Screens/Posts/Music/laundrypunk';
import Ygt from '../Screens/Posts/Music/ygt';
//Artists
import Merrilee from '../Screens/Posts/Artists/merrilee';
import Amy from '../Screens/Posts/Artists/amy';
import Alyssa from '../Screens/Posts/Artists/alyssa';
import Andrea from '../Screens/Posts/Artists/andrea';
import Byron from '../Screens/Posts/Artists/byron';
import Caroline from '../Screens/Posts/Artists/caroline';
import Chris from '../Screens/Posts/Artists/chris';
import Christina from '../Screens/Posts/Artists/christina';
import Evan from '../Screens/Posts/Artists/evan';
import Gaijin from '../Screens/Posts/Artists/gaijin';
import Hannah from '../Screens/Posts/Artists/hannah';
import Katelyn from '../Screens/Posts/Artists/katelyn';
import Leah from '../Screens/Posts/Artists/leah';
import Logan from '../Screens/Posts/Artists/logan';
import Lucy from '../Screens/Posts/Artists/lucy';
import Marbles from '../Screens/Posts/Artists/marbles';
import Rachel from '../Screens/Posts/Artists/rachel';
import Reins from '../Screens/Posts/Artists/reins';
import Rizzo from '../Screens/Posts/Artists/rizzo';
import Ryan from '../Screens/Posts/Artists/ryan';
import Sara from '../Screens/Posts/Artists/sara';
import Sarahr from '../Screens/Posts/Artists/sarahr';
import William from '../Screens/Posts/Artists/williamwebb';
import Kat from '../Screens/Posts/Artists/kat';
import Reed from '../Screens/Posts/Artists/reed';
//Photography
import Gon from '../Screens/Posts/Photography/gon';
import Sandlings from '../Screens/Posts/Photography/sandlings';
import Blacklivesmatter from '../Screens/Posts/Photography/blacklivesmatter';
import Brianarnold from '../Screens/Posts/Photography/brianarnold';
import Byronsonnier from '../Screens/Posts/Photography/byronsonnier';
import Crackerpackers from '../Screens/Posts/Photography/crackerpackers';
import Cycle from '../Screens/Posts/Photography/cycle';
import Dietrying from '../Screens/Posts/Photography/dietrying';
import Endangeredspecies from '../Screens/Posts/Photography/endangeredspecies';
import Fiesta from '../Screens/Posts/Photography/fiesta';
import Gumbo from '../Screens/Posts/Photography/gumbo';
import Ireland from '../Screens/Posts/Photography/ireland';
import Islademagia from '../Screens/Posts/Photography/islademagia';
import Lostlands from '../Screens/Posts/Photography/lostlands';
import Milestwist from '../Screens/Posts/Photography/milestwist';
import Newyork from '../Screens/Posts/Photography/newyork';
import Nonames from '../Screens/Posts/Photography/nonames';
import Pride from '../Screens/Posts/Photography/pride17';
import TrumpRally from '../Screens/Posts/Photography/trumprally';
import Skate from '../Screens/Posts/Photography/skate';
import Skateparkfund from '../Screens/Posts/Photography/skateparkfund';
import Thedojo from '../Screens/Posts/Photography/thedojo';
import Thelastgeneration from '../Screens/Posts/Photography/thelastgeneration';
import Themalverns from '../Screens/Posts/Photography/themalverns';
import Thomashall from '../Screens/Posts/Photography/thomashall';
import Twilightchildren from '../Screens/Posts/Photography/twilightchildren';
import Wisconsinwinters from '../Screens/Posts/Photography/wisconsinwinters';
import Womensmarch from '../Screens/Posts/Photography/womensmarch';
import Yoavpelli from '../Screens/Posts/Photography/yoavpelli';
import Zine from '../Screens/Posts/Photography/zine';
import TimePretend from '../Screens/Posts/Photography/timepretend';


const MainApp = () => {
  return (
    <Router>
      <Modal>
        <Scene key="root">
          <Scene key="home" component={Home} navBar={MainTabBar} initial/>
          <Scene key="calendar" component={Calendar} navBar={MainTabBar}/>
          <Scene key="artists" component={Artists} navBar={MainTabBar}/>
          <Scene key="artiststwo" component={ArtistsTwo} navBar={MainTabBar}/>
          <Scene key="artiststhree" component={ArtistsThree} navBar={MainTabBar}/>
          <Scene key="artistsfour" component={ArtistsFour} navBar={MainTabBar}/>
          <Scene key="photo" component={Photo} navBar={MainTabBar}/>
          <Scene key="phototwo" component={PhotoTwo} navBar={MainTabBar}/>
          <Scene key="photothree" component={PhotoThree} navBar={MainTabBar}/>
          <Scene key="photofour" component={PhotoFour} navBar={MainTabBar}/>
          <Scene key="music" component={Music} navBar={MainTabBar}/>
          <Scene key="musictwo" component={MusicTwo} navBar={MainTabBar}/>
          <Scene key="food" component={Food} navBar={MainTabBar}/>
          <Scene key="elsepage" component={ElsePage} navBar={MainTabBar}/>
          <Scene key="directories" component={Directories} navBar={MainTabBar}/>
          <Scene key="contact" component={Contact} navBar={MainTabBar}/>
        </Scene>
          <Scene key="menu" component={PopMenu} navBar={popMenuTab} direction="vertical"/>
          <Scene key="balloons" component={Balloons} navBar={popMenuTab} direction="vertical"/>
          <Scene key="ytg" component={Ygt} navBar={popMenuTab} direction="vertical"/>
          <Scene key="blood" component={Blood} navBar={popMenuTab} direction="vertical"/>
          <Scene key="marriage" component={Marriage} navBar={popMenuTab} direction="vertical"/>
          <Scene key="gag" component={Gag} navBar={popMenuTab} direction="vertical"/>
          <Scene key="laundry" component={LaundryPunk} navBar={popMenuTab} direction="vertical"/>
          <Scene key="psychic" component={Psychic} navBar={popMenuTab} direction="vertical"/>
          <Scene key="timepretend" component={TimePretend} navBar={popMenuTab} direction="vertical"/>
          <Scene key="lostsloss" component={LostSloss} navBar={popMenuTab} direction="vertical"/>
          <Scene key="sleepdrive" component={SleepDrive} navBar={popMenuTab} direction="vertical"/>
          <Scene key="gon" component={Gon} navBar={popMenuTab} direction="vertical"/>
          <Scene key="upperRoom" component={UpperRoom} navBar={popMenuTab} direction="vertical"/>
          <Scene key="merrilee" component={Merrilee} navBar={popMenuTab} direction="vertical"/>
          <Scene key="sandlings" component={Sandlings} navBar={popMenuTab} direction="vertical"/>
          <Scene key="blacklivesmatter" component={Blacklivesmatter} navBar={popMenuTab} direction="vertical"/>
          <Scene key="brianarnold" component={Brianarnold} navBar={popMenuTab} direction="vertical"/>
          <Scene key="crackerpackers" component={Crackerpackers} navBar={popMenuTab} direction="vertical"/>
          <Scene key="cycle" component={Cycle} navBar={popMenuTab} direction="vertical"/>
          <Scene key="dietrying" component={Dietrying} navBar={popMenuTab} direction="vertical"/>
          <Scene key="endangeredspecies" component={Endangeredspecies} navBar={popMenuTab} direction="vertical"/>
          <Scene key="fiesta" component={Fiesta} navBar={popMenuTab} direction="vertical"/>
          <Scene key="gumbo" component={Gumbo} navBar={popMenuTab} direction="vertical"/>
          <Scene key="ireland" component={Ireland} navBar={popMenuTab} direction="vertical"/>
          <Scene key="islademagia" component={Islademagia} navBar={popMenuTab} direction="vertical"/>
          <Scene key="lostlands" component={Lostlands} navBar={popMenuTab} direction="vertical"/>
          <Scene key="milestwist" component={Milestwist} navBar={popMenuTab} direction="vertical"/>
          <Scene key="newyork" component={Newyork} navBar={popMenuTab} direction="vertical"/>
          <Scene key="nonames" component={Nonames} navBar={popMenuTab} direction="vertical"/>
          <Scene key="pride" component={Pride} navBar={popMenuTab} direction="vertical"/>
          <Scene key="trumprally" component={TrumpRally} navBar={popMenuTab} direction="vertical"/>
          <Scene key="skate" component={Skate} navBar={popMenuTab} direction="vertical"/>
          <Scene key="skateparkfund" component={Skateparkfund} navBar={popMenuTab} direction="vertical"/>
          <Scene key="thedojo" component={Thedojo} navBar={popMenuTab} direction="vertical"/>
          <Scene key="thelastgeneration" component={Thelastgeneration} navBar={popMenuTab} direction="vertical"/>
          <Scene key="themalverns" component={Themalverns} navBar={popMenuTab} direction="vertical"/>
          <Scene key="thomashall" component={Thomashall} navBar={popMenuTab} direction="vertical"/>
          <Scene key="twilightchildren" component={Twilightchildren} navBar={popMenuTab} direction="vertical"/>
          <Scene key="wisconsinwinters" component={Wisconsinwinters} navBar={popMenuTab} direction="vertical"/>
          <Scene key="womensmarch" component={Womensmarch} navBar={popMenuTab} direction="vertical"/>
          <Scene key="yoavpelli" component={Yoavpelli} navBar={popMenuTab} direction="vertical"/>
          <Scene key="alyssa" component={Alyssa} navBar={popMenuTab} direction="vertical"/>
          <Scene key="amy" component={Amy} navBar={popMenuTab} direction="vertical"/>
          <Scene key="andrea" component={Andrea} navBar={popMenuTab} direction="vertical"/>
          <Scene key="byron" component={Byron} navBar={popMenuTab} direction="vertical"/>
          <Scene key="caroline" component={Caroline} navBar={popMenuTab} direction="vertical"/>
          <Scene key="chris" component={Chris} navBar={popMenuTab} direction="vertical"/>
          <Scene key="evan" component={Evan} navBar={popMenuTab} direction="vertical"/>
          <Scene key="gaijin" component={Gaijin} navBar={popMenuTab} direction="vertical"/>
          <Scene key="hannah" component={Hannah} navBar={popMenuTab} direction="vertical"/>
          <Scene key="katelyn" component={Katelyn} navBar={popMenuTab} direction="vertical"/>
          <Scene key="leah" component={Leah} navBar={popMenuTab} direction="vertical"/>
          <Scene key="logan" component={Logan} navBar={popMenuTab} direction="vertical"/>
          <Scene key="lucy" component={Lucy} navBar={popMenuTab} direction="vertical"/>
          <Scene key="marbles" component={Marbles} navBar={popMenuTab} direction="vertical"/>
          <Scene key="rachel" component={Rachel} navBar={popMenuTab} direction="vertical"/>
          <Scene key="reins" component={Reins} navBar={popMenuTab} direction="vertical"/>
          <Scene key="rizzo" component={Rizzo} navBar={popMenuTab} direction="vertical"/>
          <Scene key="ryan" component={Ryan} navBar={popMenuTab} direction="vertical"/>
          <Scene key="sara" component={Sara} navBar={popMenuTab} direction="vertical"/>
          <Scene key="sarahr" component={Sarahr} navBar={popMenuTab} direction="vertical"/>
          <Scene key="william" component={William} navBar={popMenuTab} direction="vertical"/>
          <Scene key="reed" component={Reed} navBar={popMenuTab} direction="vertical"/>
          <Scene key="kat" component={Kat} navBar={popMenuTab} direction="vertical"/>
          <Scene key="chroma" component={Erotica} navBar={popMenuTab} direction="vertical"/>
          <Scene key="heirloom" component={Heirloom} navBar={popMenuTab} direction="vertical"/>
          <Scene key="pho" component={Pho} navBar={popMenuTab} direction="vertical"/>
          <Scene key="lewis" component={Lewis} navBar={popMenuTab} direction="vertical"/>
          <Scene key="carrigans" component={Carrigans} navBar={popMenuTab} direction="vertical"/>
      </Modal>
    </Router>
  );
};

export default MainApp;
