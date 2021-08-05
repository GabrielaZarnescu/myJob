import React from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Button} from "../Button/Button";
import './OfferPost.css'
const OfferPost = ({}) => {
  
  return (
    <div className="container">
    
    <div className="left">
        <h1>Create an offer</h1>
    <Form className="form" >
      <FormGroup row>
        <Label className="labels"  sm={2}>Select programming language </Label>
        <Col sm={10}>
          <Input className="inputs"
           type="select"
           name="language"
            >
            <option>JS</option>
            <option>C</option>
            <option>C++</option>
            <option>React</option>
            <option>Java</option>
            <option>Python</option>
            <option>Ruby</option>
            <option>C#</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label  className="labels" sm={2}>Select work time</Label>
        <Col sm={10}>
          <Input className="inputs" 
          type="select" 
          name="work"  >
            <option>full time</option>
            <option>part time</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="labels" sm={2}>Select location</Label>
        <Col sm={10}>
          <Input className="inputs" 
          type="select" 
          name="location"  >
            <option>Timisoara</option>
            <option>remote</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label className="labels" sm={2}>Job Description</Label>
        <Col sm={10}>
          <Input className="inputs" 
          type="textarea" 
          name="text"
          placeholder="Enter a description"  />
        </Col>
      </FormGroup>
      
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button >Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
        <div className="right">
            
        </div>
    </div> )}

    export default OfferPost;