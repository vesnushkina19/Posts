import { Container } from "@mui/material";
import AppHeader from "../AppHeader/AppHeader";
import Footer from "../Footer/Footer";
import PostList from "../PostList/PostList";
import { postData } from "./posts";



const AppMUI = () =>  {
  return (
    <>
        <AppHeader />
        <Container >
            <PostList posts={postData}/>
        </Container>
        <Footer/>
    </>
  )
}


export default AppMUI;
