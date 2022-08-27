import { Box, Button, Container, Divider, Grid, useMediaQuery,Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import art from "./Images/art.jpg";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector,useDispatch } from "react-redux";
import {remove} from '../toolkit/Reducer';
import {useNavigate} from 'react-router-dom';
import Login from './Add';
import {saveId} from '../toolkit/Reducer';
export default function Cards() {
const navigate=useNavigate();
  const usedispatch=useDispatch();
  const matches = useMediaQuery("(max-width:750px)");
  const fetchdata=useSelector(state=>state.fetchvalue.todoslice);
  const RemoveHandler=(index)=>{
    console.log("index",index);
 usedispatch(remove(index))
  }
  const EditeHandler=(index)=>{
    usedispatch(saveId(index));
    navigate('/');
  }
  return (
    <>
      <Box
        id="Get Started"
        // sx={{
        //   background: "linear-gradient(45deg,#687A77, #687A77,#687A77)",
        // }}
        position="relative"
        zIndex={1}
        pt={10}
        pb={15}
      >
        <Box
          borderRadius="100%"
          position="absolute"
          zIndex={-1}
          bottom="0px"
          left="40%"
          boxShadow="#F4AA05 0px 0px 400px 120px"
        ></Box>
        <Container maxWidth="lg">
          <Box
            pt={5}
            style={{
              fontSize: matches ? "30px" : "50px",
              fontFamily: "Josefin Sans",
              fontWeight: "800",
              backgroundImage:
                "linear-gradient(45deg,#000000, #000000,#000000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "0px",
              WebkitTextStrokeColor: "#F4AA05",              
            }}
            ml={12}
            textAlign={matches ? "center" : "left"}
          >
           News Post
          </Box>
      
            <Box
            

              style={{
                display: "flex",
                flexDirection: "column",
              }}
              filter="blur(52px)"
              zIndex="10"
              px={matches ? 2 : 3}
              py={2}
              mt={2}
              className="shadow"
              borderRadius="15px"
            >
              <Grid container spacing={5} alignItems="center">
                {
                     fetchdata.length >0 ? ( fetchdata.map((items,index)=>{
                        return <>
                         <Grid item xs={12} sm={12} md={6} key={index}>
                  <Box
                    id="bob-on-hover"
                    mt={matches ? 5 : 0}
                    textAlign="center"
                  >
              
                    <img
                      style={{ borderRadius: "15px" }}
                      width={matches ? "100%" : "500px"}
                      src={URL.createObjectURL(items.file)}
                      alt="News post"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <Box>
                    <Box
                      style={{
                        fontSize: matches ? "20px" : "35px",
                        fontFamily: "Josefin Sans",
                        fontWeight: "800",
                        backgroundImage:
                          "linear-gradient(45deg,#C1BFBA, #F4AA05,#C1BFBA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStrokeWidth: "0px",
                        WebkitTextStrokeColor: "#F4AA05",
                        marginBottom: "10px",
                        textAlign: "left",
                      }}
                    >
                     {items.name}
                    </Box>
                    <Box
                   
                      style={{
                        
                        fontSize: matches ? "14px" : "18px",
                        fontFamily: "Josefin Sans",
                        fontWeight: "400",
                        lineHeight: "35px",
                        wordBreak: "break-all",
                        width:'100%'
                      }}
                      color="#000000"
                    >
                     <Typography>{items.description}</Typography>
                    </Box>
                    <br />
                    <Box sx={{width:'200px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                     <Button startIcon={<DeleteForeverIcon/>} sx={{color:'bloack'}} onClick={()=>{
                      RemoveHandler(index)
                     }}> Remove</Button> 
                     <Button startIcon={  <VisibilityIcon/>} sx={{color:'bloack'}} 
                     onClick={()=>{
                      EditeHandler(index);
                     }}> Edite</Button> 
                    
                    </Box>
                  </Box>
                </Grid>
                        </>
                     })):(null)
                }
               
              </Grid>
            </Box>
     
        </Container>
      </Box>
        <Divider
          style={{
            position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
            background: "linear-gradient(90deg,#C1BFBA, #F4AA05,#ffffff)",
            width: "100%",
            height: "20px",
          }}
        />
    </>
  );
}
