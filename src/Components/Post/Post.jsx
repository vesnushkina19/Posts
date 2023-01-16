import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Typography } from "@mui/material";
import {MoreVert, Favorite, ExpandMore} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {useState} from "react";
import dayjs from "dayjs";

import s from "./style.module.css"


const ExpandMoreStyled = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
  }));
const Post = ({image, title, text, author = {}, created_at}) => {
        const [expanded, setExpanded] = useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
    return (
        <Grid container item xs={12} sm={6} md={4} lg={3}>
            <Card className={s.card}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" src={author.avatar}>
                    {author.email?.slice(0,1).toUpperCase()}
                    </Avatar>
                }
                title={author.email}
                subheader={dayjs(created_at).format('dddd, D.MM.YYYY')}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={`Изображение ${title}`}
                />
                <CardContent>
                    <Typography variant="h5" >{title}</Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                    {text}
                    </Typography>
                </CardContent>
                <CardActions sx={{marginTop: "auto"}} disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Favorite />
                    </IconButton>
                    <IconButton aria-label="share">
                    </IconButton>
                    <ExpandMoreStyled
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-label="show more"
                    >
                    <ExpandMore />
                    </ExpandMoreStyled>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        {text}
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </Grid>
    )
  }
  
  
  export default Post;
  