import { Grid } from "@mui/material";
import Post from "../Post/Post";

const PostList = ({posts}) => {
    return (
      <Grid container spacing={2}>
        {posts.map(item =>(
            <Post key={item._id} {...item}/>))}
      </Grid>
    )
  }
  
  
  export default PostList;