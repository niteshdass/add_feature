import Comment from './Comments.js'
import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from '@mui/icons-material/Favorite';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import Login from './AddComment.js'
import { Button } from "@material-ui/core"



const useStyles = makeStyles({
  root: {
    marginTop: 30
  }
});

const Details = (props) => {
  const [comment, setComment] = useState(props?.location?.state?.comments)
  const [counter, setCounter] = useState(props?.location?.state?.like?.length);
  const [feature, setFeature] = useState(props?.location?.state || {})

  const classes = useStyles();


  const addVote = (counter, setCounter) => {
    return setCounter(counter + 1);
  }
  const addComment = (comment) => {
    const addCommentData = {
        title: comment?.comments || '',
        user: 'Nitesh',
        id: '1',
        createdAt: '2012-01-26T13:51:50.417-07:00'

      }
    console.log(addCommentData)
    setComment( arr => [...arr, addCommentData]);
    // return setCounter(comment);
  }

  return (
  	<>
      <Card className={classes.root}>
        <CardHeader
          avatar={
             <IconButton aria-label="settings">
            </IconButton>
          }
          action={
              <>
                <Button onClick={() => addVote(counter, setCounter)}><Favorite /> </Button>
                {counter}
              </>
          }
          title={feature?.title}
          subheader={feature?.desc}
        />
      </Card>
      <Comment comments={comment}/>
      <Login addComment={addComment}/>
  	</>
  );
}

export default  Details