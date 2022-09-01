import React from "react";
import { AppBar,InputBase,styled,Toolbar, Typography,Box } from "@mui/material";
import { Castle } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import Icon from '@mui/material/Icon';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search=styled("div")(({theme}) => ({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}));
const Icons=styled(Box)(({theme}) =>({
  display:"flex",
  alignItems:"center",
  gap:"5px"
  
}));
const Userbox=styled(Box)(({theme}) =>({
  display:"flex",
  alignItems:"center",
  gap:"0px"
  
}));

const Nav = () => {
  const[open, setOpen]=useState(false)
  return(
    <div>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6">Facebook</Typography>
          <Castle sx={{display:{xs:"block", sm: "none"}}}/>
          <Search><InputBase placeholder="search...."></InputBase>Search</Search>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
         <Userbox>
         <Avatar 
        sx={{width:30, height:30}}
         src="/static/images/avatar/2.jpg" 
           onClick={(e)=>setOpen(true)}
           />
         </Userbox>
         <Typography variant="span">John</Typography>
          </StyledToolbar>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
     </AppBar>
    </div>
   
    );
  
  };
  
  export default Nav;