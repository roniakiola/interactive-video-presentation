import { useState } from 'react';
import { InputField } from '../components/Input';
import '../css/upload.css';

const UploadVideo = () => {
  const url = 'http://localhost:3001';

  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    title: '',
    description: '',
    test: '',
  });

  const { title, description, test } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fd = new FormData();
    Object.entries(data).forEach((pair) => {
      fd.append(pair[0], pair[1]);
    });
    fd.append('file', file!);

    const fetchOptions = {
      method: 'POST',
      body: fd,
    };
    const response = await fetch(url + '/upload', fetchOptions);
    const json = await response.json();
    console.log(json);
    setData({ title: '', description: '', test: '' });
  };

  return (
    <div>
      <form className='upload-form' onSubmit={handleSubmit}>
        <InputField
          type='text'
          name='title'
          placeholder='title'
          value={title}
          onChange={handleChange}
          required
        />
        <InputField
          type='text'
          name='description'
          placeholder='description'
          value={description}
          onChange={handleChange}
          required
        />
        <InputField type='file' name='file' onChange={onFileChange} />
        <InputField
          type='text'
          name='test'
          placeholder='test field'
          value={test}
          onChange={handleChange}
        />
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UploadVideo;
