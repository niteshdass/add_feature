import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password || password.length < 8) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }
    if (!name.length) {
      formIsValid = false;
      setNameError(
        "Name is required"
      );
      return false;
    } else {
      setNameError("");
      formIsValid = true;
    }


    return formIsValid;
  };
  const authError = () => toast("Email already exist!");

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
        setLoading(true)
        const updatedData = {
          name, email , password
        }
        axios.post('https://feature-app-auth.herokuapp.com/api/signup', updatedData)
        .then(function (response) {
          console.log(response);
          history.push('/login')
          setLoading(false)
        })
        .catch(function (error) {
          setLoading(false)
          console.log(error);
          authError();
        });
    }
  };

  return (
    <div className="App">
          <ToastContainer />
      <div className="container">
        <div className="row d-flexjustify-content-center">
          { loading ? (
            <Loader style={{ marginLeft: "40%" , marginTop: "20%" }} type="ThreeDots" color="#00BFFF" />
          ) : (
              <div className="col-md-6 border mt-4" style={{marginLeft: "20%"}}>
              <form id="loginform" className="p-3" onSubmit={loginSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="EmailInput"
                    name="NameInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {nameError}
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="form-group">
        
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {passwordError}
                  </small>
                </div>
                <button type="submit" className="btn btn-primary disabled">
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
