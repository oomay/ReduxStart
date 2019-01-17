import axios from 'axios';

export default function callApi(method: string, url: string, path: string, data?: any) {   
  switch(method){
    case 'create':
    {
      return axios.post(`${url}`+`${path}`+`${data}`)  
      .catch(error => {
        throw(error);
      });
    }
    case 'getOne':{
      return axios.get(`${url}`+`${path}`+`${data}`)  
      .catch(error => {
        throw(error);
      });
    }

    default:
    {
      return axios.get(`${url}`+`${path}`)  
      .catch(error => {
        throw(error);
      });
    }

  }
 
};

   