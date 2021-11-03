import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ImageIcon from '@material-ui/icons/Image';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import CancelIcon from '@material-ui/icons/Cancel';
import SpeakerIcon from '@material-ui/icons/Speaker';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  let [display, setDisplay]= useState({ firstVisible: true, secondVisible: true, thirdVisible: true })
  const [postData, setPostData] = useState({ audio: '', video: '', message: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const inputPictureRef = useRef(null);
  const inputAudioRef = useRef(null);
  const inputVideoRef = useRef(null);

  const clear = () => {
    setCurrentId(0);
    setPostData({ video: '', audio: '', message: '', selectedFile: '' });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    let formData = new FormData();
    Object.keys(postData).forEach((key, index) => {
      formData.append(`${key}`, postData[key]);
    });
    let allEmpty = Object.keys(postData).every((key) => String(postData[key]).trim() === "");
    if (!allEmpty) {
      for (var [key, value] of formData.entries()) {
        console.log(key, value);
      }
      console.log({ currentId, formData })
      if (currentId === 0) {
        await dispatch(createPost(formData));
        clear();
      } else {
        await dispatch(updatePost(currentId, formData));
        clear();
      }
    }

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <div style={{ margin: "10px 0", display: "block !important" }}>
          <Typography variant="h6">{currentId ? `Editing post` : 'Creating a post'}</Typography>
        </div>

        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

        <Grid container spacing={0} columnSpacing={4}>
          {post && <>
            {
              String(post.selectedFile).trim() !== '' && display.firstVisible &&
              <Grid item container xs={12} alignItems="center">
                <ImageIcon />
                <CancelIcon onClick={()=>{
                  setPostData({...postData, selectedFile: ''});
                  setDisplay({...display, firstVisible: ''});
                }} />;
                <Typography variant="caption" noWrap={true}>{post.selectedFile}</Typography>
              </Grid>
            }
            {
              String(post.audio).trim() !== '' && display.secondVisible &&
              <Grid item container xs={12} alignItems="center">
                <SpeakerIcon />
                <CancelIcon onClick={()=>{
                  setPostData({...postData, audio: ''});
                  setDisplay({...display, secondVisible: ''});
                }} />;
                <Typography variant="caption" noWrap={true}>{post.audio}</Typography>
              </Grid>
            }
            {
              String(post.video).trim() !== ''  && display.thirdVisible &&
              <Grid item container xs={12} alignItems="center">
                <OndemandVideoIcon  />
                <CancelIcon onClick={()=>{
                  setPostData({...postData, video: ''});
                  setDisplay({...display, thirdVisible: ''});
                }} />;
                <Typography variant="caption" noWrap={true} >{post.video}
                </Typography>
              </Grid>
            }
          </>}
        </Grid>

        <Grid container spacing={2} justify="center" align="center">
          <Grid item xs={12} >
            <IconFileInput
              refPass={inputPictureRef}
              iconSvg={<ImageIcon style={{ color: "green", fontSize: "40px" }} />}
              formName="selectedFile" fileExtension=".jpg, .png, .jpeg, .gif"
              onChangeEvent={(e) => { setPostData({ ...postData, selectedFile: e.target.files[0] }); }}
            // e.target.files[0]
            />

            <IconFileInput
              refPass={inputVideoRef}
              iconSvg={<OndemandVideoIcon style={{ color: "green", fontSize: "40px" }} />}
              formName="video" fileExtension=".mp4, .mov, .webm, .ogg"
              onChangeEvent={(e) => { setPostData({ ...postData, video: e.target.files[0] }); }}
            // e.target.files[0]
            />
            <IconFileInput
              refPass={inputAudioRef}
              iconSvg={<SpeakerIcon style={{ color: "green", fontSize: "40px" }} />}
              formName="audio" fileExtension=".mp3, .ogg, .wag"
              onChangeEvent={(e) => { setPostData({ ...postData, audio: e.target.files[0] }); }}
            // e.target.files[0]
            />
          </Grid>
        </Grid>
        <Button className={classes.buttonSubmit} variant="contained" color="green" size="large" type="submit" fullWidth>Submit</Button>
        {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
      </form>
    </Paper >
  );
};

export default Form;


function IconFileInput({ refPass, iconSvg, formName, fileExtension, onChangeEvent }) {
  // ref: 
  //  imageUrl: https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/Lj2juiFPWMr.png
  // formName: selectedFile
  // fileExtension: ".jpg, .png, .jpeg, .gif"
  // onChangeEvent: 
  return (
    <>
      <span onClick={() => {
        refPass.current.click()
      }
      }>
        {iconSvg}
        <input
          style={{ display: "none" }}
          type="file"
          ref={refPass}
          name={formName}
          accept={fileExtension}
          onChange={onChangeEvent}
        />
      </span>
    </>
  );
}
