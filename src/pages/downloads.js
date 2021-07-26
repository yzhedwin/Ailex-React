import React, { Component } from "react";

import { Fab, Box } from "@material-ui/core";

import GetAppIcon  from '@material-ui/icons/GetApp';

import EmptyState from "../components/EmptyState";


function redirect() {
    const url = 'https://drive.google.com/drive/folders/1El13ekUEu7YJw4fyXPMMgQfy9IB0FlnO'
  return  window.location.href = url;
}

class Downloads extends Component {

  render() {
    return (
      <EmptyState
        title="Download page"
        button={
          <Fab variant="extended" color="primary" onClick= { redirect} >
            <Box clone mr={1}>
              <GetAppIcon />
            </Box>
            Download Now
          </Fab>
        }
      />
    );
  }
}

export default Downloads;