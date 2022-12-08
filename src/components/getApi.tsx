import axios from 'axios';

const fetchData = (url: string) => {
  // const url = 'test.json';

  // const url =
  //   'mongodb+srv://vooler:vooler@cluster0.fnaaudx.mongodb.net/?retryWrites=true&w=majority';

  return axios
    .get(url)
    .then(({ data }) => {
      //Success
      console.log(data);
      return data;
    })
    .catch((err) => {
      //Error
      console.error(err);
    });
};

export default fetchData;
