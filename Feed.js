import React from "react";
import Post from './Post';
import { Box } from "@mui/system";


const Feed = () => {
  return(
    <div>
      <Box>
     <Post/> 
     <Post/> 
     <Post/> 
     <Post/> 
     </Box>
    </div>
   
    );
  
  };
  
  export default Feed;