import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalForm from './FormModal.js'

const UserList = () => {
  const [ features, setFeatures ] = useState( [] )
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true)
    axios.get( `https://feature-app-auth.herokuapp.com/api/post` )
    .then( res => {
      const feature = res.data;
      setFeatures(feature);
      setLoading(false)
    })
  }


  const handleStatusUpdate = (statusData, val) => {
    const { _id} = statusData
    const updateData = {
      _id,
      status: val
    };
    console.log(updateData)
    axios.put('https://feature-app-auth.herokuapp.com/api/update', updateData)
        .then(response => {
          setLoading(false)
          fetchData()
        });
  }

  useEffect( () => {
    fetchData()
  }, [])

  return (
  			 <div className="container py-5">
      <header className="text-center text-white">
        <h1 className="display-4">List of Users</h1>
      </header>
      <div className="row py-5">
        <div className="col-lg-10 mx-auto">
          <div className="card rounded shadow border-0">
            <div className="card-body p-5 bg-white rounded">
              {
                loading ? (
                  <Loader style={{ marginLeft: "40%" , marginTop: "10%" }} type="ThreeDots" color="#00BFFF" />
                ) : (
                  <div className="table-responsive">
                    <table id="example" style={{ width: "100%" }} className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>title</th>
                          <th>Like</th>
                          <th>Comment</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {features.map( feature =>
                          <tr>
                            <td>{feature?.title}</td>
                            <td>{feature?.like}</td>
                            <td>{feature?.comment}</td>
                            <td>{feature?.status === 0 ? 'Pending' : 'Accepted'}</td>
                            <td>
                              {
                                feature?.status === 0 ? (
                                  <button onClick={() => handleStatusUpdate(feature, 1)} class="btn btn-primary"> Accept </button>
                                ) : (
                                  <button onClick={() => handleStatusUpdate(feature, "0")} class="btn btn-info">Deactivate</button>
                                )
                              }
                              <ModalForm dataItem={feature} fetchData={fetchData} setLoading={setLoading}/>
                            </td>
                          </tr> )}
                      </tbody>
                    </table>
                  </div>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default UserList;
