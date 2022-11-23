import { useState } from 'react';
import { InputFields } from '../components/UploadInputFields';
import '../css/upload.css';

const UploadVideo = () => {
  const url = 'http://localhost:3001';

  interface DataSet {
    title: string;
    description: string;
    question: string;
    path?: string;
  }

  const [inputData, setData] = useState<DataSet[]>([
    {
      title: '',
      description: '',
      question: '',
    },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let data = [...inputData];
    data[index][e.target.name as keyof DataSet] = e.target.value;
    setData(data);
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
    inputData.forEach((item) => {
      fd.append('inputdata', JSON.stringify(item));
    });

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
    };
    setData([...inputData, newInputObject]);
  };

  return (
    <div>
      <button onClick={addInputFields}>Add input</button>
      <form className='upload-form' onSubmit={handleSubmit}>
        {inputData.map((obj, index) => {
          return (
            <InputFields
              onChange={handleChange}
              onFileChange={onFileChange}
              index={index}
              title={obj.title}
              desc={obj.description}
              quest={obj.question}
            />
          );
        })}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UploadVideo;