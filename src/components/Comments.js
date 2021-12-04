import React from "react";
import moment from 'moment'
import Cookies from 'js-cookie'

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";

  const Comment = ({comments = []}) => {
  const userId = Cookies.get('id');
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Comments</h1>

       <Paper style={{ padding: "40px 20px" }}>
        {comments.map( comment => (
          <>
            <Grid container wrap="nowrap" style={{ background: comment?.userId === userId ? "azure" : ""}}  spacing={2}>
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
