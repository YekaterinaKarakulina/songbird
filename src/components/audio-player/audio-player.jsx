import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'

import './audio-player.scss';

const Player = (props) => (
  <AudioPlayer
    autoPlay={false}
    src={props.audio}
    autoPlayAfterSrcChange={false}
  />
);

export default Player;
