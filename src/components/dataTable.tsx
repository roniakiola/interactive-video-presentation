import { useEffect, useState } from 'react';
import DataRow from './DataRow';
import fetchFiles from './getApi';

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

const DataTable = () => {
  const [videos, setVideos] = useState<videoInfo[]>([]);

  useEffect(() => {
    (async () => {
      const muuttuja = 'http://localhost:3001';

      const dataArray = await fetchFiles(muuttuja);
      console.log(dataArray);
      setVideos(dataArray);
    })();
  }, []);

  return (
    <>
      <div className='presentations'>
        {videos.map((item: videoInfo, index: number) => {
          return (
            <DataRow
              key={index}
              file={item}
              videoUrl={''}
              videoUrlTitle={''}
              videoUrlDesc={''}
              videoUrlStaticPic={undefined}
              optionsQuestion={''}
              optionsQuestionImg={undefined}
              yesValue={undefined}
              noValue={undefined}
            />
          );
        })}
      </div>
    </>
  );
};
export default DataTable;
