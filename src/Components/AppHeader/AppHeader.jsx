import { AppBar, Box, Button, Fade, IconButton, Modal, Toolbar, Typography } from "@mui/material";
import {Menu, Add} from "@mui/icons-material";
import { useState } from "react";
import s from "./style.module.css";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const AppHeader = () => {

  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);
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
          <Add className={s.add} onClick={handleOpenModal}/>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modal}
            onClose={handleCloseModal}
            closeAfterTransition
            // BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modal}>
              <Box className={s.modal}>
                <Typography variant="h6" component="h2">
                  Здесь, в идеале, добавляется пост ^_^
                </Typography>
              </Box>
            </Fade>
          </Modal>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default AppHeader;
