import { Link } from 'react-router-dom';
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
interface videoProps extends videoInfo {
  file?: any;
  key?: any;
}

const DataRow = (props: videoProps) => {
  const file = props;
  // console.log('DATAROW', file.file[0].videoUrlDesc);
  return (
    <Link
      className='presentName'
      key={file.videoUrl}
      to={'/videos'}
      state={{ file }}
    >
      {file.file[0].videoUrlDesc}
    </Link>
  );
};
export default DataRow;
