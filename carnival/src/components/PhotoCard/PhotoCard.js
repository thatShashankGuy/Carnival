import React from 'react';
import fetchData from '../../ApiLogic/unsplashAPi'
import './PhotoCard.css'
import Tilt from 'react-parallax-tilt';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      width: 200,
      height: 200,
      display : 'flex',
      justifyContent : 'center',
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const PhotoCard = () => {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className = 'Centre ma4 mt0'>
    <Tilt>
    <Card className={classes.root}>
      <CardContent>
       <img src = {fetchData} />
      </CardContent>
    </Card>
    </Tilt>
        </div>
    )
}

export  default PhotoCard