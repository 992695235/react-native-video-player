import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import VodScreen from './view/VodScreen';
import LiveScreen from './view/LiveScreen';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome KsyMediaplay',
  };
//rtmp://live.hkstv.hk.lxdns.com/live/hks  http://192.168.77.35:8000/iphone7.mp4 /storage/emulated/0/Download/iphone7.mp4 /storage/emulated/0/Download/bbb_720p_qy265.flv
  constructor(props) {
      super(props);
      this.state = { text: 'http://videohy.tc.qq.com/vlive.qqvideo.tc.qq.com/AyTHfm7kg4_gsclMzcgYGqJvWqxVdlIvEAbZv7g4aOVA/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/a0786ort1o3.p701.1.mp4?sdtfrom=v1105&guid=36b65aceb9fef479c2725a629e38ef68&vkey=71EB94690908DF995CD8AEE2832BDB0E51004B00F66F97BF31504E68EE7AE93F3C036AA13C1E7B434D375629EA12D088B52D17728871045BFAA984D9CD14CA1F91F1BA56C1FE779C33D3EF9F64D7A6E91FD2403D5B895AB107A93DF900ACC513072D3C6060E2DA7FF11DD9F327EB4195D30CE124D03E69C6&ocid=892539820' };
    }

  render() {
    const { navigate } = this.props.navigation;
    var value = this.state.text;
    return (
      <View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems: 'center',}}>
          <TextInput
            style={{height: 40, width: 300}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          


        </View>

        <TouchableOpacity style={{marginTop:10}} >
          <Button
            onPress={() =>  navigate('PlayVod', { user: value }) }
            title="点播"
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginTop:10}} >
          <Button
            onPress={() =>  navigate('PlayLive', { user: value }) }
            title="直播"
          />
      </TouchableOpacity>

      </View>
    );
  }
}

export const KSYMediaPlayer_RN = StackNavigator({
  Home: { screen: HomeScreen },
  PlayVod: { screen: VodScreen , navigationOptions:{
              header:null
            }},
  PlayLive: { screen: LiveScreen , navigationOptions:{
              header:null
            }},

});

export default class App extends React.Component {
  render() {
    return <KSYMediaPlayer_RN />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
