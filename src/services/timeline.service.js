import axios from "axios";
import Timeline from "../utils/timeline.util";
import { getImageName, getAudioName } from '../utils/stringManipulation.util';

 const getTimeline = async ()=> {
    let timelineArray =  [];
    await axios.get(`${process.env.REACT_APP_TIMELINE_URL}`)
      .then(response => {
        let timelineData = response.data['Timeline'];
        timelineData.forEach(item => {
            const newItem = new Timeline(
                item['Id'],
                item['Episode'],
                item['Title'],
                item['Media'],
                item['Description'],
                getImageName(item['Image']),
                getImageName(item['Icon']),
                getAudioName(item['Audio']),
                item['RemoteId'],
                item['Status'],
                item['isActive'],
                item['inId'],
                item['CreateDate'],
                item['MediaName'],
                item['Category'],
                item['Epoch'], 
                item['AudioSize'],
            )
            timelineArray.push(newItem);
        });
      })
      .catch(error => {
        console.error(error);
      });

      return timelineArray;
};

export default getTimeline;