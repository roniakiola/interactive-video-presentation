import React from 'react';
import { useEffect, useState } from 'react';
import fetchData from './getApi';
import Player from './video';

interface videoInfo {
  videoUrl: string;
  videoUrlTitle: string;
  videoUrlDesc: string;
  videoUrlStaticPic: any;
  optionsQuestion: string;
  optionsQuestionImg: any;
  options: [
    {
      title: string;
      titleImg: any;
      value: number;
    },
    {
      title: string;
      titleImg: any;
      value: number;
    }
  ];
}

const Choose = () => {
  const [playList, setPlayList] = useState<videoInfo[]>([]);
  const [url, setUrl] = useState<any>();

  let currentVid = 0;
  useEffect(() => {
    fetchData().then((videosData: any) => {
      setPlayList(videosData);
      // console.log(videosData);
      setUrl(videosData[currentVid].videoUrl);
    });
  }, []);

  let nextVid = currentVid + 1;
  // const nextVid2 = playList[currentVid].options[0].value;
  console.log(playList[currentVid]?.options[0].value);
  console.log(playList[currentVid]?.options[1].value);

  return (
    <>
      <div className='options' id='test'>
        <div className='eka'>
          <h1>Valinta 1: {playList[currentVid]?.videoUrlTitle}</h1>
          <table>
            <tbody>
              <tr>
                <td>{playList[currentVid]?.videoUrlDesc}</td>
                {/* <td>{playList[currentVid].videoUrlTitle}</td> */}
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* object["property"]   =  object.property */}
          <button
            onClick={() => {
              setUrl(playList[nextVid].videoUrl);

              // 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3'
              console.log(url);
              console.log(nextVid);
              // setUrl();
              // playList[playList[x.currentVid].options[0].value].videoUrl //[y.nextVid]??
            }}
          >
            Valitse
          </button>
        </div>
        <div className='toka'>
          <h1>Valinta 2: Talo</h1>
          <button
            onClick={() => {
              // setUrl(playList[nextvid2].videoUrl);
              // 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
              console.log(url);
              // setUrl(playList[y.nextVid][playList[x.currentVid].options[1].value].videoUrl);
            }}
          >
            Valitse
          </button>
        </div>
      </div>
      <Player urlDataProp={url} />
    </>
  );
};
export default Choose;
