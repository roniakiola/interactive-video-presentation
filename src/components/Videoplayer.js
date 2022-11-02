import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <>
      <ReactPlayer
        className='videoplayer'
        width={'800px'}
        height={'800px'}
        controls={true}
        url='https://users.metropolia.fi/~panurai/Audio Visual/Videosprintti 2.mp4'
        onEnded={() => console.log('onEnded callback')}
      ></ReactPlayer>
    </>
  );
};

export default Video;
