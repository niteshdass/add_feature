import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

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


const FormModal =({dataItem, setLoading, fetchData}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState(dataItem?.title);

  function openModal() {
    setIsOpen(true);
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(title)
    const updateData = {
      _id: dataItem?._id,
      title
    };
    axios.put('https://feature-app-auth.herokuapp.com/api/update', updateData)
        .then(response => {
          setLoading(false)
          fetchData()
        });
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
                  type="text"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  value={title}
                  placeholder="Enter title"
                  onChange={(event) => setTitle(event.target.value)}
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