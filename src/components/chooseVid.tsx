import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Player from './video';

interface videoInfo {
  videoUrl: string;
  videoUrlTitle: string;
  videoUrlDesc: string;
  videoUrlStaticPic: any;
  optionsQuestion: string;
  optionsQuestionImg: any;
  yesValue: any;
  noValue: any;
}

const hideDiv = () => {
  const test = document.getElementById('test');
  if (test !== null) test.style.display = 'none';
};

const Choose = () => {
  const location = useLocation();
  console.log('Location:', location);
  const file = location.state.file.file;
  console.log('File: ', file);

  const [playList] = useState<videoInfo[]>(file);
  const [url, setUrl] = useState<any>(file[0].videoUrl);

  const [currentVid, setCurrentVid] = useState(0);

  const nextOption1 = playList[currentVid]?.yesValue;
  const nextOption2 = playList[currentVid]?.noValue;

  console.log('playlist', playList);
  console.log('currentVid: ', currentVid);
  console.log('NextOption1: ', nextOption1);
  console.log('NextOption2: ', nextOption2);

  console.log(url);

  // fetchData(muuttuja).then((videosData: any) => {
  //   setPlayList(videosData);
  //   setUrl(videosData[currentVid].videoUrl);
  // });

  return (
    <>
      <div className='options' id='test'>
        {nextOption1 === 'End' && nextOption2 === 'End' && (
          <div className='end'>
            <h1>End of Presentation</h1>
          </div>
        )}
        {(nextOption1 !== 'End' || nextOption2 !== 'End') && (
          <>
            <div className='box'>
              <h1 className='urlTitle'>
                {playList[nextOption1]?.videoUrlTitle}
              </h1>
              <p className='urlDesc'>{playList[nextOption1]?.videoUrlDesc}</p>
              <video className='poster' src={playList[nextOption1]?.videoUrl} />
              <p className='optQ'>{playList[nextOption1]?.optionsQuestion}</p>
              {/* object["property"]   =  object.property */}
              <div className='buttonWrapper'>
                <button
                  className='chooseButton'
                  onClick={() => {
                    setUrl(playList[nextOption1]?.videoUrl);
                    setCurrentVid(nextOption1);
                    hideDiv();
                    // playList[playList[x.currentVid].options[0].value].videoUrl //[y.nextVid]??
                  }}
                >
                  Valitse
                  {/* {playList[currentVid]?.options[0].title} */}
                </button>
              </div>
            </div>
            <div className='box'>
              <h1 className='urlTitle'>
                {playList[nextOption2]?.videoUrlTitle}
              </h1>
              <p className='urlDesc'>{playList[nextOption2]?.videoUrlDesc}</p>
              <video className='poster' src={playList[nextOption2]?.videoUrl} />
              <p className='optQ'>{playList[nextOption2]?.optionsQuestion}</p>
              <div className='buttonWrapper'>
                <button
                  className='chooseButton'
                  onClick={() => {
                    setUrl(playList[nextOption2]?.videoUrl);
                    setCurrentVid(nextOption2);
                    hideDiv();
                    // setUrl(playList[y.nextVid][playList[x.currentVid].options[1].value].videoUrl);
                  }}
                >
                  Valitse
                  {/* {playList[currentVid]?.options[1].title} */}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Player urlDataProp={url} />
    </>
  );
};
export default Choose;
