import { useState } from 'react';

const UploadVideo = () => {
  const url = 'http://localhost:3001';

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const onFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', desc);
    fd.append('file', file!);

    const fetchOptions = {
      method: 'POST',
      enctype: 'multipart/form-data',
      body: fd,
    };
    const response = await fetch(url + '/upload', fetchOptions);
    const json = await response.json();
    console.log(json);
    setFile(null);
    setDesc('');
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <input
          type='text'
          name='description'
          placeholder='description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></input>
        <input type='file' name='file' onChange={onFileChange} required></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UploadVideo;
