const url = 'http://localhost:3001';
let fileID: any = '';

const fetchFiles = async () => {
  const fetchOptions = {
    method: 'GET',
  };
  const response = await fetch(url + '/upload', fetchOptions);
  const respo = await response.json();
  console.log(respo);
  return respo;
  // fileID = respo[1]._id;
  // fetchSingleFile();
};

const fetchSingleFile = async () => {
  const fetchOptions = {
    method: 'GET',
  };
  const response = await fetch(url + '/upload/' + fileID, fetchOptions);
  const respo = await response.json();
  console.log(respo);
  console.log(fileID);
};
export default fetchFiles;
