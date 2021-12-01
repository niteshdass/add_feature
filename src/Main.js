import './App.css';
import React, {useState, useEffect} from "react";
import Card from './components/Card.js'
import AddFeature from './components/AddFeature.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataTable } from './data.js'

const Main = () => {
  const [sortData, setSortData] = useState()
  const [featureFilter, setFeatureFilter] = useState('')
  const [filterData, setFilterData] = useState({})
  const [featureData, setFeatureData] = useState(DataTable || [])

  console.log(filterData, sortData, DataTable);

    const addFeature = (data) => {
    setFeatureData( arr => [...arr, data]);
    console.log(data)
    // return setCounter(comment);
  }

  const sortHandle = (e) => {
    setSortData(e.target.value)
    console.log(e.target.value);
  }

  const filterWithtitle = (data) => {
       setFeatureData(
         featureData.filter((item) =>
          item.title.toLowerCase().includes(data.toLowerCase())
        )
       );
  }

  const filterHandle = (e) => {
    setFilterData({option: e.target.value})
  }

  // const FormatData = (features) => {
  //   features.map(feature => {
  //     const featureObj = {};
  //     featureObj.title
  //   })
  // }

  //   useEffect(() => {
  //     setFeatureData(
  //       featureData.filter((item) =>
  //         item.title.toLowerCase().includes(featureFilter.toLowerCase())
  //       )
  //     );
  // }, [featureData]);

  return (
    <Box>
      <Grid container spacing={2} style={{marginTop: "-40"}}>
        <Grid item xs={4}>
          <select onChange = {sortHandle} class="selectpicker container mt-4 text-center border p-2">
              <option value="1">Assending</option>
              <option value="-1">Decending</option>
          </select>
        </Grid>
        <Grid item xs={8}>
           <div class="container mt-4 text-center border p-2">
             <div class="form-check-inline">
              <label class="form-check-label">
                <input value="vote" onChange = {filterHandle} type="radio" class="form-check-input" name="optradio" />Vote
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input value="comment" onChange = {filterHandle} type="radio" class="form-check-input" name="optradio" />Comment
              </label>
            </div>
            <div class="form-check-inline disabled">
              <label class="form-check-label">
                <input onChange = {filterHandle} type="radio" class="form-check-input" name="optradio" />Option 3
              </label>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{marginTop: "-40"}}>
        <Grid item xs={4}>
          <AddFeature addFeature={addFeature} filterWithtitle= {filterWithtitle}/>
        </Grid>
        <Grid item xs={8}>
          <Card featureData={featureData}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;


