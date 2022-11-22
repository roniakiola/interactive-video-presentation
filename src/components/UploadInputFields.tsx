import { useState } from 'react';

type InputProps = {
  index: number;
  url: string;
};
export const InputFields = (props: InputProps) => {
  const { index, url } = props;

  // const [data, setData] = useState({
  //   title: '',
  //   description: '',
  //   question: '',
  // });
  // const { title, description, question } = data;

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  //   console.log(data);
  // };

  // const onFileChange = async (e: any) => {
  //   const fdFile = new FormData();
  //   fdFile.append('file', e.target.files[0]);

  //   const fetchOptions = {
  //     method: 'POST',
  //     body: fdFile,
  //   };
  //   const response = await fetch(url + '/upload', fetchOptions);
  //   const json = await response.json();
  //   console.log(json);
  // };

  return (
    <div className='input-container' key={index}>
      <div className='input-label-container'>
        <label htmlFor='title'>
          <input
            className='input-field'
            type='text'
            name='title'
            placeholder='title'
            value={title}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='description'>
          <input
            className='input-field'
            type='text'
            name='description'
            placeholder='description'
            value={description}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='question'>
          <input
            className='input-field'
            type='text'
            name='question'
            placeholder='question'
            value={question}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='file'>
          <input
            className='input-field'
            type='file'
            name='file'
            onChange={onFileChange}
          ></input>
        </label>
      </div>
    </div>
  );
};
