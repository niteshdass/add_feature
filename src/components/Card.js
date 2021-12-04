import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { Link } from "react-router-dom";
import moment from 'moment'


const CardPage = ({featureData}) => {
  return (
    
    <section class="row cards justify-content-center">
      <div class="component cards col-12 row justify-content-center">
        {
          featureData.map( (feature) => (
              <div class="col-12 col-md-4">
                  {feature?.status === 1 ? (
              <div class="card">
              <div class="card-heade row">
                <div style={{textAlign: "left", marginLeft:"4%"}} class="col-md-8">
                  <Link to={{ pathname: "/details", state: feature}}>{feature?.like} <ThumbUpIcon /></Link>
                </div>
                <div style={{textAlign: "right"}} class="col-md-3">
                  <Link to={{ pathname: "/details", state: feature}}>{feature?.comment}<BookmarkRemoveIcon /></Link>
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
              ) : (
                ''
              )}
   
            </div>

            ))
        }
      </div>
    </section>
  );
}

export default CardPage;
