import axios from "axios";

 const getAudio = ()=> {
    
    axios.get(`${process.env.REACT_APP_AUDIO_URL}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
};

export default getAudio;