import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import { useEffect} from 'react';

const Viewprod = () => {
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setdata(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return (
    <div>
      {data.map((item)=>(
         <Card sx={{ minWidth: 275,margin:'5%' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Price : {item.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {item.description}
        </Typography>
        <Typography variant="body2">
          Category: {item.category}
          <br />
          <img src={item.image} alt="No image found" />
        </Typography>
      </CardContent>
    </Card>
    ))}
    </div>
  )
}

export default Viewprod