import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from '@mui/icons-material/Favorite';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { Link } from "react-router-dom";
import moment from 'moment'


const useStyles = makeStyles({
  root: {
    marginTop: 30
  }
});

const CardPage = ({featureData}) => {
  const classes = useStyles();

  return (
    
    <section class="row cards justify-content-center">
      <div class="component cards col-12 row justify-content-center">
        {
          featureData.map( (feature) => (
            <div class="col-12 col-md-4">
              <div class="card">
                <div class="card-heade row">
                 <div style={{textAlign: "left", marginLeft:"4%"}} class="col-md-8">
                    <Link to="/details">{feature?.like?.length} <Favorite /></Link>
                  </div>
                  <div style={{textAlign: "right"}} class="col-md-3">
                    <Link to="/details">{feature?.comments?.length}<BookmarkRemoveIcon /></Link>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">{feature?.title}</h5>
                  <p class="card-text">{feature?.desc?.substring(0, 100)}</p>
                  <Link to={{ pathname: "/details", state: feature}} class="btn btn-primary">Go Details</Link>
                </div>
                <div class="card-footer text-muted">
                  {moment(feature?.createdAt).startOf('hour').fromNow()}
                </div>
              </div>
            </div>

            ))
        }
      </div>
    </section>
  );
}

export default CardPage;
