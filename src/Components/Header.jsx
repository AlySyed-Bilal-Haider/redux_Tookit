import React from 'react'
import { Container, Button, Grid, Box, Typography,Divider } from "@mui/material";
import {Link} from 'react-router-dom';
const linkstyle={
    color:"white",textDecoration:'none',fontWeight:'bold'
}
function Header() {
  return (
   <Box sx={{width:'100%',backgroundColor:"black",py:2}}>
    <Box sx={{width:'15%',display:'flex',justifyContent:'space-around',
    alignItems:'center'}}>
        <Link to="/" style={linkstyle}>Add</Link>
        <Link to="/Cards"  style={linkstyle}>Details</Link>
    </Box>
   </Box>
  )
}

export default Header