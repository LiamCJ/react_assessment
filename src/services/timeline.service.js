import axios from "axios";

 const getTimeline = ()=> {
    
    axios.get(`${process.env.REACT_APP_TIMELINE_URL}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
};

export default getTimeline;