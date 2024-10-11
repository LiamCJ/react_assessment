import {useState, useEffect} from 'react';
import TimelineItem from './timeline.component';
import getTimeline from '../services/timeline.service';

const DataTable = ()=> {

  const [timeline, setTimeline] = useState([]);

    async function getData(){

    let output =  await getTimeline();
     
    return setTimeline(output);
 
   };
 
   useEffect(() => {
    getData();
   }, []);

  return (
    <ul>
      {timeline.map(item => (
        <li key={item.id}>
          <TimelineItem details={item} />
        </li>
      ))}
    </ul>
  );
}

export default DataTable;