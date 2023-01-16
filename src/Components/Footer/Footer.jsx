import { Facebook, Instagram, Telegram } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import s from "./style.module.css";





const Footer = () => {
  
    return (
        <Box >
            <BottomNavigation className={s.footer}>
                <BottomNavigationAction label="Recents" icon={<Telegram />} />
                <BottomNavigationAction label="Favorites" icon={<Instagram />} />
                <BottomNavigationAction label="Nearby" icon={<Facebook/>} />
            </BottomNavigation>
        </Box>
    )
  }
  
  
  export default Footer;