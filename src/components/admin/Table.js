import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { useEffect } from "react";
import ModalForm from './FormModal.js'

const UserList = () => {
  const [ listOfUSer, setListOfUSer ] = useState( [] )
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [ update, setUpdate ] = useState(true)
  useEffect( () => {
    axios.get( `https://jsonplaceholder.typicode.com/users` )
      .then( res => {
        const persons = res.data;
        setListOfUSer( persons );
      })

  }, []
  )

  const handleUpdateView = () => {
  	setUpdate(!update)
  }



  return (
  			 <div className="container py-5">
      <header className="text-center text-white">
        <h1 className="display-4">List of Users</h1>
      </header>
      <div className="row py-5">
        <div className="col-lg-10 mx-auto">
          <div className="card rounded shadow border-0">
            <div className="card-body p-5 bg-white rounded">
              <div className="table-responsive">
                <table id="example" style={{ width: "100%" }} className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Company</th>
                      <th>Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOfUSer.map( person =>
                      <tr>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                        <td>{person.email}</td>
                        <td>{person.address.street}</td>
                        <td>{person.company.name}</td>
                         <ModalForm dataItem={person}/>
                      </tr> )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default UserList;
