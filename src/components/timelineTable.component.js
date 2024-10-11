import {useState, useEffect} from 'react';
import TimelineItem from './timeline.component';
import getTimeline from '../services/timeline.service';
import * as React from 'react';
import Grid from '@mui/material/Grid2';

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
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {timeline.map((data, _) => (
          <Grid key={data.id} size={{ xs: 2, sm: 4, md: 4 }} alignItems="center">
            <TimelineItem details={data} />
          </Grid>
        ))}
    </Grid>
  );
}

export default DataTable;