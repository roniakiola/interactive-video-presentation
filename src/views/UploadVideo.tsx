import { useState } from 'react';
import { InputField } from '../components/Input';

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
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UploadVideo;
