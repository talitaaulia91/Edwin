import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function Cards(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', height:"100%" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className="title">Hello, {props.username}!</div>
          <div className="subtitle" >This is your profile page, you can see and edit your own profile. Aside from that, you can also see your performance report below.</div>
        </CardContent>
      </Box>
    </Card>
  );
}
