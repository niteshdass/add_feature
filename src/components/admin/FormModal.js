import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const FormModal =({dataItem}) => {
  console.log(dataItem)
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
    const [password, setPassword] = useState('pass');
  const [email, setEmail] = useState(dataItem?.name);
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  function openModal() {
    setIsOpen(true);
  }

    const loginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button class="btn btn-primary"  onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button class="btn btn-danger" onClick={closeModal}>close</button>
            <form id="loginform" className="p-3" onSubmit={loginSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  value={email}
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
        
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
      </Modal>
    </div>
  );
}

export default FormModal;