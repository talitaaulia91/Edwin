import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function CardProfiles(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', height:"100%" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Avatar sx={{ backgroundColor:"#4D2DB7", width:"100px", height:"100px", margin:"auto"}}>
            <AccountCircleIcon sx={{ width:"100px", height:"100px" }}></AccountCircleIcon>
          </Avatar>
          <div className="subtitle" style={{ marginTop:10, textAlign:"center" }} >Email: {props.email}</div>
          <div className="subtitle" style={{ marginTop:10, textAlign:"center" }} >Username: {props.username}</div>
        </CardContent>
      </Box>
    </Card>
  );
}
