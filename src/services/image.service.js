import axios from "axios";

 const getImages = ()=> {
    
    axios.get(`${process.env.REACT_APP_IMAGE_URL}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
};

export default getImages;