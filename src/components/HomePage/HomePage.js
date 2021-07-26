import React, { Component } from "react";

import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import { auth } from "../../firebase";

import authentication from "../../services/authentication";

import EmptyState from "../EmptyState";

import { ReactComponent as CabinIllustration } from "../../illustrations/cabin.svg";
import { ReactComponent as InsertBlockIllustration } from "../../illustrations/insert-block.svg";
import './HomePage.css';


class HomePage extends Component {
  signInWithEmailLink = () => {
    const { user } = this.props;

    if (user) {
      return;
    }

    const emailLink = window.location.href;

    if (!emailLink) {
      return;
    }

    if (auth.isSignInWithEmailLink(emailLink)) {
      let emailAddress = localStorage.getItem("emailAddress");

      if (!emailAddress) {
        this.props.history.push("/");

        return;
      }

      authentication
        .signInWithEmailLink(emailAddress, emailLink)
        .then((value) => {
          const user = value.user;
          const displayName = user.displayName;
          const emailAddress = user.email;

          this.props.openSnackbar(
            `Signed in as ${displayName || emailAddress}`
          );
        })
        .catch((reason) => {
          const code = reason.code;
          const message = reason.message;

          switch (code) {
            case "auth/expired-action-code":
            case "auth/invalid-email":
            case "auth/user-disabled":
              this.props.openSnackbar(message);
              break;

            default:
              this.props.openSnackbar(message);
              return;
          }
        })
        .finally(() => {
          this.props.history.push("/");
        });
    }
  };

  render() {
    const { user } = this.props;
    const headerStyle = {
      backgroundColor:'black',
      alignItems: 'center',
      display: 'inline',
      justifyContent: 'center',
      marginLeft: '550px',
      borderRadius: 50,
      fontSize:'50px',
      color: 'lightgrey',
      fontWeight: '500',
      width: '100px',
     };

    const ldivStyle = {
      backgroundColor:'skyblue',
      alignItems: 'left',
      display: 'block',
      margin: 100,
      borderRadius: 10,
      fontSize:'30px',
      width: '550px',
      marginLeft: '50px',
     };
const rdivStyle = {
      backgroundColor:'skyblue',
      justifyContent: 'center',
      display: 'block',
      borderWidth: 20, 
      marginLeft: '900px',
      borderRadius: 10,
      fontSize:'30px',
      width: '550px',
     };
     const newStyle = {
       display: 'block',
       height: '800px',
     };

      return (
        
      <body>
       <EmptyState
        image={ <CabinIllustration/> }
        title="Ailex"
        description="Your Autonomous Solution"
      />
      <div>
        <div style={newStyle}></div>
      </div>

       <div style={headerStyle}>
          Featured Features
       </div>    

       <div class="parallax1">

       <div style={rdivStyle}>
       Environment and NPC creation - You can now create your very own NPCs and maps for
        your own immersive experience!
       </div>   
       </div>    

       <div class="parallax2">
       <div style={ldivStyle}>
       Integrated Development Environment -
       For you to code your own agent and collect data for machine learning!
       </div>    
       </div>   

       <div class="parallax3">
       <div style={rdivStyle}>
        NPC by SUMO - Make edits to map traffic items such as stop lines, bus stop, traffic lights.
        Issue real time command such as closing a lane.
       </div>    
       </div>   

       <div class="parallax4">
       <div style={ldivStyle}>
         8 Different maps to test out your autonomous driving AI
       </div>   
       </div>    

       <div class="parallax5">
       <div style={rdivStyle}>
         Environment Tweaking - Change the time of day or weather and more!
       </div>   
       </div>    

       <div class="parallax6">
       <div style={ldivStyle}>
        XBox controller support included!
       </div>
       </div>


       </body>
      );
  }

  componentDidMount() {
    this.signInWithEmailLink();
  }
}

HomePage.propTypes = {
  user: PropTypes.object,
};

export default withRouter(HomePage);
