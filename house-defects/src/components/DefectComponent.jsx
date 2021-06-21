import React, { Component } from "react";
import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

//import {Grid, Row, Col} from "react-bootstrap";

// display all hardcoded defects as cards

class DefectComponent extends Component {

  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
        defects: [
          {name: "1", description: "Lol"},
          {name: "2", description: "Lol"},
          {name: "3", description: "Lol"},
          {name: "4", description: "Lol"},
          {name: "5", description: "Lol"},
          {name: "6", description: "Lol"},
          {name: "7", description: "Lol"},
          {name: "8", description: "Lol"},
          {name: "9", description: "Lol"},
          {name: "10", description: "Lol"},
          {name: "11", description: "Lol"},
          {name: "12", description: "Lol"},
          {name: "13", description: "Lol"},
          {name: "14", description: "Lol"},
          {name: "15", description: "Lol"},
          {name: "16", description: "Lol"},
          {name: "17", description: "Lol"},
          {name: "18", description: "Lol"},
          {name: "19", description: "Lol"},
          {name: "20", description: "Lol"},
          {name: "21", description: "Lol"},
          {name: "22", description: "Lol"},
          {name: "23", description: "Lol"},
          {name: "24", description: "Lol"}
      ],
        message: null
    }
    
    this.generateDefects = this.generateDefects.bind(this)
    
  }

  componentDidMount() {
   
  }

  generateDefects() {

    return(
      this.state.defects.map(
        defect => 
    
        <Card border="secondary" onClick={{}}key={defect.name} style={{margin: "5px"}}>
        <Card.Body>
          <Card.Title>{defect.name}</Card.Title>
          <Card.Text>{defect.description}</Card.Text>
        </Card.Body>
        <Card.Footer>Date Added</Card.Footer>
        </Card> 
  
        
      )
    )
  
  }

  

  /* showAlert() {
    <div className="container">
    <Alert variant="success" show="true">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
    </p>
    </Alert>
    </div>
    
  } */
  

  render() {
    return (
  
      <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100%'}}>
        <div className="row row-cols-4" style={{justifyContent: "center"}}>
          {this.generateDefects()}
        </div>
      </div>

      
     
    );
  }
}
export default DefectComponent;
