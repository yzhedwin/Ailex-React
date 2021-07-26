import React, { Component } from "react";

import EmptyState from "../components/EmptyState";

import BlockIcon from '@material-ui/icons/Block';
import { red } from "@material-ui/core/colors";



class Restricted extends Component {
  render() {
    return (
      <EmptyState
       image={<BlockIcon style ={{ fontSize: 200, color: red[600]}} /> }
        title="Not Authorized"
        description="Please Sign in to view this"
      />
    );
  }
}

export default Restricted;