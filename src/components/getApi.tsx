const fetchFiles = async (url: string) => {
  const fetchOptions = {
    method: 'GET',
  };
  const response = await fetch(url + '/upload', fetchOptions);
  const respo = await response.json();
  console.log(respo);
  return respo;
};

export default fetchFiles;
