import React from "react";
import { Box } from "@mui/system";
import { ListItemIcon } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';
const Sidebar = () => {
  return(
    <div>
      <Box   flex={1}
      p={2}
      sx={{display:{xs: "none", sm:"block" }}}>


       
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <PagesIcon/>
            </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Groups">
            <ListItemIcon>
              <GroupsIcon/>
            </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#People">
            <ListItemIcon>
              <PeopleIcon/>
            </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Account">
            <ListItemIcon>
              <AccountBoxIcon/>
            </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#moon">
            <ListItemIcon>
              <ModeNightIcon/>
            </ListItemIcon>
            <Switch/>
            </ListItemButton>
          </ListItem>
          
        </List>
      </Box>
      
    </div>
   
    );
  
  };
  
  export default Sidebar;