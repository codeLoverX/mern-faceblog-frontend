import React from 'react';
import { Card, CardActions, Divider, CardMedia, Stack, Button, Typography, MenuList, MenuItem, ListItemText, ListItemIcon, Popover, Avatar } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ProfileImage from '../../../assets/profil.jpg';
import { useDispatch } from 'react-redux';

import { likePost, dislikePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dateObj = new Date(post.createdAt);
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = year + "/" + month + "/" + day;

  return (
    <Card className={classes.card}>
      <div>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Avatar alt="Remy Sharp" src={ProfileImage} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">Ridwan Bin Monjur posted {newdate}</Typography>
            </ListItemText>
            <Typography variant="body2" color="text.secondary">
              <Button aria-describedby={id} variant="contained" onClick={handleClick} style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 0px 0px white" }}>
                <MoreHorizIcon fontSize="default" />
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Button size="default" onClick={() => { dispatch(deletePost(post._id)); handleClose(); }}><DeleteIcon fontSize="small" /> Delete</Button>
                <br />
                <Divider />
                <Button size="default" onClick={() => { setCurrentId(post._id); handleClose(); }}><EditIcon fontSize="small" />  Edit</Button>
              </Popover>
            </Typography>
          </MenuItem>

        </MenuList>

        <div style={{ margin: "10px 0" }} >
          {String(post.selectedFile).trim() !== '' &&
            <img src={post.selectedFile} alt="Girl in a jacket" style={{ width: "100%" }} />
          }


          {String(post.message).trim() !== '' &&
            <div className={classes.gap}>
              <Typography variant="body2" color="textSecondary" component="h5">{post.message}</Typography>
            </div>
          }

          {String(post.audio).trim() !== '' &&
            <div className={classes.gap}>
              <audio controls className={classes.audio}>
                <source src={post.audio} />
              </audio>
            </div>
          }
          {String(post.video).trim() !== '' &&
            <div className={classes.gap}>
              <video width="100%" controls autoPlay>
                <source src={post.video} />
              </video>
            </div>
          }
        </div>
        <Divider light />
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
          <Button size="small" color="primary" onClick={() => dispatch(dislikePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Dislike {post.dislikeCount} </Button>
        </CardActions>

        <Divider light />
      </div>
    </Card >
  );
};

export default Post;
