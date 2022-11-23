import { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  state = {
    url: "https://users.metropolia.fi/~panurai/Audio Visual/Videosprintti 2.mp4",
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
  };
  load = (url: any) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
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
    this.setState({ muted: !this.state.muted });
  };
  handleProgress = (state: any) => {
    console.log('onProgress', state);
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
renderButton=(url:any, text:any) => {
    return (
        <button onClick={()=> {
            this.load(url)
        }}>
        {text}
        </button>
    )
}
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
      // loaded,
      // duration,
      playbackRate,
    } = this.state;
    // const SEPARATOR = ' · ';
    return (
      <>
        <div>
            <div>
            <table>
                    <tbody>
                        <tr>
                            <th>
                                valinta2
                            </th>
                            <td id="hehe">
                                {this.renderButton  ("https://i.gyazo.com/c523338ba8d9a2ea652f9472534fae2d.mp4","vaihtoehto1")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                valinta1
                            </th>
                            <td id="hehe">
                                {this.renderButton("https://i.gyazo.com/65f15c5b75e04666a19ab515b1dec036.mp4","vaihtoehto2")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='v-wrapper'>
        <ReactPlayer
            ref={this.ref}
            className='videoplayer'
            width='100%'
            height='100%'
            url={url}
            playing={playing}
            controls={controls}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
            onProgress={this.handleProgress}
            onSeek={(e) => console.log('onSeek', e)}
        ></ReactPlayer>
        </div>
        <div className='buttonWrapper'>
          <table className='controls'>
            <tr>
              <td>
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
                <input
                  className='volumeBar'
                  type='range'
                  min={0}
                  max={1}
                  step='any'
                  value={volume}
                  onChange={this.handleVolumeChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button className='button' onClick={this.handlePlayPause}>
                  {playing ? 'Pause' : 'Play'}
                </button>

                <button className='button' onClick={this.handleToggleMuted}>
                  {muted ? 'Unmute' : 'Mute'}
                </button>
              </td>
                <td>
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}
export default Player;