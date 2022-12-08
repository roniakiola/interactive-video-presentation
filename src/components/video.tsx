import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Duration from './Duration';

const NewDiv = () => {
  const test = document.getElementById('test');
  if (test !== null) test.style.display = 'flex';
};

class Player extends Component<any> {
  state = {
    url: this.props.urlDataProp,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.5,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
  };
  componentDidUpdate(prevProps: { urlDataProp: any }) {
    if (this.props.urlDataProp !== prevProps.urlDataProp)
      this.setState({
        url: this.props.urlDataProp,
        played: 0,
        loaded: 0,
        duration: 0,
        volume: 0.5,
        playing: true, // true JOS HALUAA AUTOPLAY KUN VIDEO VAIHTUU
      });
  }

  load = (url: any) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      playing: true,
      pip: false,
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  handlePlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };
  handlePause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };
  handleSeekMouseDown = () => {
    this.setState({ seeking: true });
  };
  handleSeekChange = (e: any) => {
    this.setState({ played: parseFloat(e.target.value) });
  };
  handleSeekMouseUp = (e: any) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  handleVolumeChange = (e: any) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };
  handleToggleMuted = () => {
    console.log('onToggleMuted', { muted: !this.state.muted });
    this.setState({ muted: !this.state.muted });
    //volume = 0 : volume = e.target.value
  };
  handleProgress = (state: any) => {
    // console.log('onProgress', state);
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  handleDuration = (duration: number) => {
    // console.log('onDuration', duration);
    this.setState({ duration });
  };
  handleEnded = () => {
    console.log('Ended');
    NewDiv();
  };
  ref = (player: any) => {
    this.player = player;
  };
  player: any;
  render() {
    const {
      url,
      playing,
      controls,
      volume,
      muted,
      played,
      loop,
      // loaded,
      duration,
      playbackRate,
    } = this.state;

    return (
      <>
        <div className='v-wrapper'>
          <ReactPlayer
            ref={this.ref}
            className='videoplayer'
            width='100%'
            height='100%'
            loop={loop}
            url={url}
            playing={playing}
            controls={controls}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
            onSeek={(e) => console.log('onSeek', e)}
            onEnded={this.handleEnded}
          ></ReactPlayer>
        </div>
        <div className='controlsWrapper'>
          <div className='controls'>
            <div className='barValue'>
              <input
                className='progressBar'
                type='range'
                min={0}
                max={0.999999}
                step='any'
                value={played}
                onMouseDown={this.handleSeekMouseDown}
                onChange={this.handleSeekChange}
                onMouseUp={this.handleSeekMouseUp}
              />

              <div className='durationWrapper'>
                <Duration seconds={duration * played} className={'duration'} />
                /
                <Duration seconds={duration} className={'duration'} />
              </div>
            </div>
            <div className='ppmWrapper'>
              <div className='tyhjä'></div>
              <div className='playPause'>
                <button className='button' onClick={this.handlePlayPause}>
                  {playing ? (
                    <div className='pauseIcon' />
                  ) : (
                    <div className='playIcon' />
                  )}
                </button>
                <button className='button' onClick={this.handleToggleMuted}>
                  {muted ? (
                    <div className='volumeIcon' />
                  ) : (
                    <div className='muteIcon' />
                  )}
                </button>
              </div>
              <div className='mute'>
                <input
                  className='volumeBar'
                  type='range'
                  min={0}
                  max={1}
                  step='any'
                  value={volume}
                  onChange={this.handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Player;
