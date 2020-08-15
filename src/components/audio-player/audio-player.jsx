import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'

import './audio-player.scss';

export default class Player extends React.Component {

  constructor(props) {
    super(props)
    this.player = React.createRef()
  }

  stopAudio = () => {
    const { isAnswerCorrect } = this.props;

    if (isAnswerCorrect) {
      const audioElement = this.player.current.audio.current;
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }

  render() {

    const { audio } = this.props;

    return (
      <AudioPlayer
        autoPlay={false}
        src={audio}
        autoPlayAfterSrcChange={false}
        isAnswerCorrect={this.stopAudio()}
        ref={this.player}
      />
    )
  }
}
