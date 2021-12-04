import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { size } from 'lodash'
import Loader from "react-loader-spinner";
import Card from './components/Card.js'
import AddFeature from './components/AddFeature.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cookies from 'js-cookie'

export const isAuth = () => {
  const token = Cookies.get('token')
  if(token) {
    return true;
  }
  return false;
} 


const Main = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cashData, setCashData] = React.useState([]);
  const [sortBy, setSortBy] = useState('')
  const [order, setOrder] = useState('')
  const [loading, setLoading] = useState(false)
  const [featureData, setFeatureData] = useState([])

  const orderHandle = (e) => {
    setOrder(e.target.value)
    console.log(e.target.value);
  }

  const filterWithtitle = () => {
    const filterdata = featureData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFeatureData(size(filterdata) && size(searchTerm) ? filterdata : cashData)
  }

  const sortHandle = (e) => {
    setSortBy(e.target.value)
  }

  const formetData = (featutes) => {
    setFeatureData(featutes)
    setCashData(featutes)
  }

  const getFeatureData = () => {
    setLoading(true);
    axios.get(`https://feature-app-auth.herokuapp.com/api/post?sortBy=${sortBy}&order=${order}`)
    .then(res => {
      formetData(res?.data)
      setLoading(false);
    })
  }

  useEffect( () => {
    filterWithtitle()
    // eslint-disable-next-line
  }, [searchTerm])

  useEffect(() => { 
    isAuth()
}, []);

    useEffect(() => { 
      getFeatureData()
      // eslint-disable-next-line
  }, [order, sortBy]);

  return (
    <Box>
      <Grid container spacing={2} style={{marginTop: "-40"}}>
        <Grid item xs={4}>
          <select onChange = {orderHandle} class="selectpicker container mt-4 text-center border p-2 bg-light">
              <option value="dsc">Assending</option>
              <option value="asc">Decending</option>
          </select>
        </Grid>
        <Grid item xs={8}>
           <div class="container mt-4 text-center border p-2 bg-light">
             <div class="form-check-inline">
              <label class="form-check-label">
                <input value="like" onChange = {sortHandle} type="radio" class="form-check-input" name="optradio" />Vote
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input value="comment" onChange = {sortHandle} type="radio" class="form-check-input" name="optradio" />Comment
              </label>
            </div>
            <div class="form-check-inline disabled">
              <label class="form-check-label">
                <input value="updatedAt" onChange = {sortHandle} type="radio" class="form-check-input" name="optradio" />Created By
              </label>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{marginTop: "-40"}}>
        <Grid item xs={4}>
          <AddFeature
            setLoading={setLoading}
            getFeatureData={getFeatureData}
            filterWithtitle= {filterWithtitle}
            setSearchTerm={setSearchTerm}
          />
        </Grid>
        <Grid item xs={8}>
          {loading ?
            <Loader style={{ marginLeft: "40%" , marginTop: "20%" }} type="ThreeDots" color="#00BFFF" />
            : <Card featureData={featureData}/>
          }
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;


