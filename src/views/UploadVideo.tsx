import { useState, useEffect } from 'react';
import { InputFields } from '../components/UploadInputFields';
import '../css/upload.css';

const UploadVideo = () => {
  const url = 'http://localhost:3001';

  interface DataSet {
    videoUrlTitle: string;
    videoUrlDesc: string;
    optionsQuestion: string;
    videoUrl: string;
    yesValue: string;
    noValue: string;
  }

  const [arr, setArr] = useState<Array<any>>(['start']);

  const [inputData, setData] = useState<DataSet[]>([
    {
      videoUrlTitle: '',
      videoUrlDesc: '',
      optionsQuestion: '',
      yesValue: '0',
      noValue: '0',
      videoUrl: '',
    },
  ]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    let data: any = [...inputData];
    data[index][e.target.name as keyof DataSet] = e.target.value;
    setData(data);
    console.log(index, e.target.value);
    console.log(data);
  };

  const onFileChange = async (e: any, index: number) => {
    const fdFile = new FormData();
    fdFile.append('file', e.target.files[0]);

    const fetchOptions = {
      method: 'POST',
      body: fdFile,
    };
    const response = await fetch(url + '/upload', fetchOptions);
    const filevideoUrl = await response.json();
    console.log(filevideoUrl);
    console.log(inputData[index]);
    //save filevideoUrl to right inputData
    let data = inputData[index];
    data.videoUrl = filevideoUrl;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('inputdata', JSON.stringify(inputData));

    const fetchOptions = {
      method: 'POST',
      body: fd,
    };
    const response = await fetch(url + '/upload/formdata', fetchOptions);
    const json = await response.json();
    console.log(json);
  };

  const addInputFields = () => {
    let newInputObject = {
      videoUrlTitle: '',
      videoUrlDesc: '',
      optionsQuestion: '',
      yesValue: '0',
      noValue: '0',
      videoUrl: '',
    };
    setData([...inputData, newInputObject]);
    inputData.forEach((item, index) => {
      setArr([...arr, index + 1]);
    });
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    inputData.pop();
    arr.pop();
    setData([...inputData]);
    console.log(inputData);
  };

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <div>
      <button onClick={addInputFields}>Add input</button>
      <form className='upload-form' onSubmit={handleSubmit}>
        {inputData.map((obj, index) => {
          console.log(index);
          console.log(obj);
          console.log(inputData.length);
          return (
            <>
              <InputFields
                key={index}
                onChange={handleChange}
                onFileChange={onFileChange}
                index={index}
                title={obj.videoUrlTitle}
                desc={obj.videoUrlDesc}
                quest={obj.optionsQuestion}
                yesVal={
                  obj.yesValue === 'start' ? (obj.yesValue = '0') : obj.yesValue
                }
                noVal={
                  obj.noValue === 'start' ? (obj.noValue = '0') : obj.noValue
                }
                arr={arr}
                // lastVid={index === inputData.length - 1 ? true : false}
              />
            </>
          );
        })}
        <button
          disabled={inputData.length > 1 ? false : true}
          type='button'
          onClick={(e) => handleClick(e)}
        >
          Delete
        </button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UploadVideo;
