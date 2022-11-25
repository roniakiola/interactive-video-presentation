import axios from 'axios';

const fetchData = () => {
  const url = 'test.json';

  return axios
    .get(url)
    .then(({ data }) => {
      //Success
      // console.log(data);
      return data;
    })
    .catch((err) => {
      //Error
      console.error(err);
    });
};

export default fetchData;
