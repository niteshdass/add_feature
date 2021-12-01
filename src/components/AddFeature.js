import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App({addFeature, filterWithtitle}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
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
      filterWithtitle(e.target.value)
  }
  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation()
    const updatedData = {
        id: 9,
        title,
        desc,
        image: file,
        createdAt: '2012-01-26T13:51:50.417-07:00',
        like: [],
        comments: []
      }
      addFeature(updatedData)
  };

  return (
    <div className="App">
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
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  id="FileInput"
                  name="FileInput"
                  aria-describedby="emailHelp"
                  onChange={(event) => setFile(event.target.files[0])}
                />
              </div>
              <button type="submit" className="btn btn-primary">
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
