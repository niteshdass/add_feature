// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import { Link } from "react-router-dom";
// // import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}> 
//       <AppBar position="static">
//         <Toolbar>
//           <Link to="/">
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               Menu
//             </IconButton>
//           </Link>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
//           </Typography>
//           <Link to="/register">
//             <Button color="inherit">
//                 Register
//             </Button>
//            </Link>
//           <Link to="/login">
//             <Button color="inherit">
//                 Login
//             </Button>
//            </Link>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import React, { Component } from "react";
import { render } from "react-dom";
// import Latest from "./latest_trek";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbar.css";
import { Route} from "react-router";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Link className="navbar-brand" to="/">
          POST
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/login" className="nav-item nav-link">Login</Link>
            <Link to="/register" className="nav-item nav-link">Register</Link>  
          </div>
        </div>
      </nav>
    
    </div>
    
  );
}

export default Navbar;
