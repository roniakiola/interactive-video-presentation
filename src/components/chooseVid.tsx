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

  let [currentVid, setCurrentVid] = useState(0);

  let nextOption1 = playList[currentVid]?.options[0].value;
  let nextOption2 = playList[currentVid]?.options[1].value;
  useEffect(() => {
    fetchData().then((videosData: any) => {
      setPlayList(videosData);
      // console.log(videosData);
      setUrl(videosData[currentVid].videoUrl);
    });
  }, [currentVid]);

  console.log('currentVid: ', currentVid);
  // const nextVid2 = playList[currentVid].options[0].value;
  // console.log('Valinta 1 URL', playList[nextOption1]?.videoUrl);
  console.log('NextOption1: ', nextOption1);
  let lastEle: any = playList[playList.length - 1];
  if (lastEle === nextOption1 || lastEle === nextOption2) {
    console.log('Viimeinen index');
  }

  return (
    <>
      <div className='options' id='test'>
        <div className='eka'>
          <h1>Valinta 1: {playList[nextOption1]?.videoUrlTitle}</h1>
          <table>
            <tbody>
              <tr>
                <td>{playList[nextOption1]?.videoUrlDesc}</td>
                <td>{playList[nextOption1]?.optionsQuestion}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* object["property"]   =  object.property */}
          <button
            onClick={() => {
              setUrl(playList[nextOption1]?.videoUrl);
              setCurrentVid(nextOption1);
              // playList[playList[x.currentVid].options[0].value].videoUrl //[y.nextVid]??
            }}
          >
            Valitse
          </button>
        </div>
        <div className='toka'>
          <h1>Valinta 2: {playList[nextOption2]?.videoUrlTitle}</h1>
          <button
            onClick={() => {
              setUrl(playList[nextOption2]?.videoUrl);
              setCurrentVid(nextOption2);
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
