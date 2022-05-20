import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "34px" }}>
            PetPooja
          </Typography>
          <Button color="inherit" sx={{ fontSize: "22px", marginRight:"65%" }}>
            <Link to="/" style={{textDecoration:"none", color:"White"}}>
              Items
            </Link>
          </Button>
          <Button color="inherit" sx={{ fontSize: "22px" }}>
            <Link to="/card" style={{textDecoration:"none", color:"White"}}>
              cards
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar
