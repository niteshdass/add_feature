import React, { useState } from "react";
import axios from 'axios';
import { isAuth } from '../Main.js'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App({getFeatureData, setLoading, setSearchTerm}) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // eslint-disable-next-line
  const [file, setFile] = useState(null);
  const [titleError, setTitleError] = useState("");
  const [descError, setDescError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!title.length) {
      formIsValid = false;
      setTitleError("Title is required");
      return false;
    } else {
      setTitleError("");
      formIsValid = true;
    }

    if (!desc.length) {
      formIsValid = false;
      setDescError(
        "Description is required"
      );
      return false;
    } else {
      setDescError("");
      formIsValid = true;
    }

    return formIsValid;
  };
  const handleTitle = (e) => {
      setTitle(e.target.value)
      setSearchTerm(e.target.value)
  }
  const success = () => toast("Feature add successfully!");
  const error = () => toast("Something went wrong!");
  const authError = () => toast("Please signin!");
  const loginSubmit = (e) => {
    e.preventDefault();
    if (isAuth()) {
      handleValidation()
      if(handleValidation) {
        setLoading(true);
        var bodyFormData = new FormData();
        bodyFormData.append('title', title);
        bodyFormData.append('desc', desc);
        bodyFormData.append('image', file);
        axios({
          method: "post",
          url: `https://feature-app-auth.herokuapp.com/api/create/post`,
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
            //handle success
            getFeatureData();
            success();
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            setLoading(false);
            getFeatureData();
            error();
            console.log(response);
          });
      }
    } else {
      history.push('/')
      authError()
    }
    
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="container">
        <div className="row d-flexjustify-content-center">
          <div className="col-md-10 border mt-4" style={{marginLeft: "4%"}}>
            <h5>ADD FEATURE</h5>
            <form id="loginform" className="p-3" onSubmit={loginSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="TitleInput"
                  name="TitleInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter title"
                  onChange={handleTitle}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {titleError}
                </small>
              </div>
              <div className="form-group">
                <textarea
                  id="form7"
                  class="md-textarea form-control"
                  rows="3"
                   name="EmailInput"
                  aria-describedby="emailHelp"
                  onChange={(event) => setDesc(event.target.value)}
                ></textarea>
                <small id="emailHelp" className="text-danger form-text">
                  {descError}
                </small>
              </div>
              {/* <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  id="FileInput"
                  name="FileInput"
                  aria-describedby="emailHelp"
                  onChange={(event) => setFile(event.target.files[0])}
                />
              </div> */}
              <button type="submit" className="btn btn-primary disabled">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
