import { Container } from "@mui/material";
import AppHeader from "../AppHeader/AppHeader";
import PostList from "../PostList/PostList";
import { postData } from "./posts";



const AppMUI = () =>  {
  return (
    <>
        <AppHeader />
        <Container >
            <PostList posts={postData}/>
        </Container>
    </>
  )
}


export default AppMUI;
