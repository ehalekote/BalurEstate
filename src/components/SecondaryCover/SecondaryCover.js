import React from "react";
import "./SecondaryCover.css"
import { Container, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";


class SecondaryCover extends React.Component {
	
  render(){

	const {
		text,
		cover}=this.props;
    

    return (
      <div className="secondaryBackgroundCover" style = {{backgroundImage: `url(${this.props.cover})`}}>
      	<div className="secondaryHomeLogo">
      		{text}
      	</div>
      </div>
    );
  }
}

SecondaryCover.PropTypes = {
  text: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default SecondaryCover;