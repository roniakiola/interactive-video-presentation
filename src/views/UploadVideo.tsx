import { useState, useEffect } from 'react';
import { InputFields } from '../components/UploadInputFields';
import '../css/upload.css';

const UploadVideo = () => {
  const url = 'http://localhost:3001';

  interface DataSet {
    title: string;
    description: string;
    question: string;
    path?: string;
    yesVal: string;
    noVal: string;
  }

  const [arr, setArr] = useState<Array<any>>(['end', 0]);

  const [inputData, setData] = useState<DataSet[]>([
    {
      title: '',
      description: '',
      question: '',
      yesVal: '1',
      noVal: '1',
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
    const filePath = await response.json();
    console.log(filePath);
    console.log(inputData[index]);
    //save filepath to right inputData
    let data = inputData[index];
    data.path = filePath;
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
      title: '',
      description: '',
      question: '',
      yesVal: '1',
      noVal: '1',
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
          return (
            <>
              <InputFields
                key={index}
                onChange={handleChange}
                onFileChange={onFileChange}
                index={index}
                title={obj.title}
                desc={obj.description}
                quest={obj.question}
                yesVal={obj.yesVal}
                noVal={obj.noVal}
                arr={arr}
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
