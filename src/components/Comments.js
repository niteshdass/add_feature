import React from "react";
import ReactDOM from "react-dom";
import moment from 'moment'

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";


const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const Comment = ({comments}) => {
  console.log(comments)
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Comments</h1>

       <Paper style={{ padding: "40px 20px" }}>
        {comments.map( comment => (
          <>
            <Grid container wrap="nowrap" style={{ background: comment?.id === "1" ? "azure" : ""}}  spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={comment?.images} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>{comment?.user}</h4>
                <p style={{ textAlign: "left" }}>
                   {comment?.title}
                </p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  {moment(comment?.createdAt).startOf('hour').fromNow()}
                </p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

          </>
        ))}
      </Paper>
    </div>
  );
}

export default Comment;
