import { AppBar, Box, Fade, IconButton, Modal, Toolbar, Typography } from "@mui/material";
import {Menu, Add} from "@mui/icons-material";

import ButtonAdd from "../Button/Button";


const AppHeader = () => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}>
              Post
          </Typography>
          <ButtonAdd/>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default AppHeader;
