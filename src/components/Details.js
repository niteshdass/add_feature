import Comment from './Comments.js'
import axios from 'axios';
import React, {useState, useEffect} from "react";
import {includes} from 'lodash';
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import IconButton from "@material-ui/core/IconButton";
import AddComment from './AddComment.js'
import Cookies from 'js-cookie'
import { Button } from "@material-ui/core"
import { isAuth } from '../Main.js'




const useStyles = makeStyles({
  root: {
    marginTop: 30
  }
});

const Details = (props) => {
  const history = useHistory();
  const userId = Cookies.get('id');
  const [comment, setComment] = useState(props?.location?.state?.comments)
  const [liked, setLiked] = useState(false)
  const [counter, setCounter] = useState(props?.location?.state?.like || 0);
  // eslint-disable-next-line
  const [feature, setFeature] = useState(props?.location?.state || {})
  const [loading, setLoading] = useState(false)


  const classes = useStyles();

  const authError = () => toast("Please signin!");
  const responseError = () => toast("Something went wrong!");
  const success = () => toast("Successfully vote update!");

  const checkAndRedirect = () => {
    if (!isAuth()) {
      authError()
      setTimeout(function(){ history.push('/login') }, 3000);
      return false
    }
    return true 
  }

  const addVote = (counter, setCounter) => {
    setLoading(true)
    const updatedData = {
      _id: feature._id,
      user_id: [userId]
    }
    axios.put('https://feature-app-auth.herokuapp.com/api/like', updatedData)
    .then(function (response) {
      console.log(response);
      success()
      if(response?.data?.like > counter) {
        setCounter(counter + 1)
        setLiked(true)
      } else {
        setCounter(counter - 1)
        setLiked(false)
      }
      setLoading(false)
    })
    .catch(function (error) {
      setLoading(false)
      responseError();
    });
  }
  const addComment = (comment) => {
    setLoading(true);
    if (checkAndRedirect()) {
      if(comment) {
        const addCommentData = {
          comment: [
            {
              title: comment|| '',
              user: Cookies.get('user'),
              createdAt: Date.now(),
              userId
            }
          ],
          _id: props?.location?.state?._id,
      
        }
        axios.put('https://feature-app-auth.herokuapp.com/api/comment', addCommentData)
        .then(function (response) {
          console.log(response);
          setLoading(false)
          if(response) {
            setComment( arr => [...arr, addCommentData?.comment[0]]);
          }
        })
        .catch(function (error) {
          setLoading(false)
          responseError();
        });
        console.log(addCommentData)
      }
    }
    // return setCounter(comment);
  }

  useEffect( () => {
    setLiked(includes(feature?.likes, userId) ? true : false)
    // eslint-disable-next-line
  }, [])

  return (
  	<div className="container">
      <Card className={classes.root}>
        <ToastContainer />
        <CardHeader
          avatar={
             <IconButton aria-label="settings">
            </IconButton>
          }
          action={
              <>
              {isAuth() ? (
                <>
                  {!liked ? (
                    <Button onClick={() => addVote(counter, setCounter)}><ThumbUpIcon /> </Button>
                  ) : (
                    <Button onClick={() => addVote(counter, setCounter)}><ThumbDownAltIcon /> </Button>
                  )}
                </>
              ) : (
                <Button onClick={() => checkAndRedirect()}><ThumbsUpDownIcon /> </Button>
              )}

                {counter}
              </>
          }
          title={feature?.title}
          subheader={feature?.desc}
        />
      </Card>
      <Comment comments={comment} loading={loading}/>
      <AddComment addComment={addComment}/>
  	</div>
  );
}

export default  Details