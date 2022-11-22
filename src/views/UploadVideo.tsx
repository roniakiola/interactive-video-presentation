import { title } from 'process';
import { useState } from 'react';
// import { InputField } from '../components/Input';
import { InputFields } from '../components/UploadInputFields';
import '../css/upload.css';

const UploadVideo = () => {
  const url = 'http://localhost:3001';

  const [index, setIndex] = useState(1);

  const [data, setData] = useState({
    title: '',
    description: '',
    question: '',
  });
  const { title, description, question } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const onFileChange = async (e: any) => {
    const fdFile = new FormData();
    fdFile.append('file', e.target.files[0]);

    const fetchOptions = {
      method: 'POST',
      body: fdFile,
    };
    const response = await fetch(url + '/upload', fetchOptions);
    const json = await response.json();
    console.log(json);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fd = new FormData();
    // Object.entries(data).forEach((pair) => {
    //   fd.append(pair[0], pair[1] as string);
    // });

    const fetchOptions = {
      method: 'POST',
      body: fd,
    };
    const response = await fetch(url + '/upload/formdata', fetchOptions);
    const json = await response.json();
    console.log(json);
  };

  const [inputList, setInputList] = useState([
    <InputFields index={index} url={url} />,
  ]);

  const addInputFields = () => {
    setIndex((index) => index + 1);
    console.log(index);
    setInputList(inputList.concat(<InputFields index={index} url={url} />));
  };

  return (
    <div>
      <button onClick={addInputFields}>Add input</button>
      <form className='upload-form' onSubmit={handleSubmit}>
        {inputList}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UploadVideo;
