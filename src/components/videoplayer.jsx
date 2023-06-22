import React from 'react';
import Video from 'react-native-video'
import { StyleSheet, View } from 'react-native';
import video from '../assets/videos/test_video.mp4';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  VideoPlayer: {
    width: '100%',
    aspectRatio: 16 / 9,
  },

});

const VideoPlayer = () => {
    return (
      <View style={styles.container}>
        <Video
          source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
          resizeMode='contain'
          style={styles.VideoPlayer}
          paused={true}
          controls={true}
        />
      </View>
    );
  };



export default VideoPlayer;