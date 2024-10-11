import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Audio({ url, visible }) {
  if (visible) {
    return <AudioPlayer
    src={url}
    onPlay={e => console.log("onPlay")}
  />;
  }
  return <div>No Audio</div>;
}

const TimelineItem = ({details})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${process.env.REACT_APP_IMAGE_URL}${details.image}`}
        title={details.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {details.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {details.category}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {details.description}
        </Typography>
        <Audio 
          visible={details.audio !== "" && details.audio !== undefined} 
          url={`${process.env.REACT_APP_AUDIO_URL}${details.audio}`}
        />
      </CardContent>
      <CardActions>
        <Button size="small">{details.mediaName}</Button>
      </CardActions>
    </Card>
  );
}

export default TimelineItem;