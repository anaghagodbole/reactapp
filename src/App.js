import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import './App.css';
import Second from'./Second';



class App extends Component {
  state={
    firstname:'',
    lastname:'',
    companyname:'',
    phonenumber:'',
    message:'sign up',
    secondflag:false,
   
  };

  
  handlefirstname = (event) => {
    if(event.target.value.match("^[a-zA-Z ]*$")!=null) {
       this.setState({firstname: event.target.value});
    }
   }

  handlelastname = (event) => {
    if(event.target.value.match("^[a-zA-Z ]*$")!=null) {
    this.setState({lastname: event.target.value});
    }
  }

  handlecompanyname = (event) => {
    if(event.target.value.match("^[a-zA-Z ]*$")!=null) {
    this.setState({companyname: event.target.value});
  }
}

  handlephonenumber = (event) => {
    if(event.target.value.length<=10){
    this.setState({phonenumber: event.target.value});
    }
  }

   handleClick=(event)=>{
   this.setState({secondflag:true})
   }
   

  render() {
    return (
          <Container className="App">
          <h1 className="text-center">{this.state.message}</h1>
        {
         this.state.secondflag ? ( <Second firstname={this.state.firstname} 
         lastname={this.state.lastname}
         companyname={this.state.companyname}
         phonenumber={this.state.phonenumber}/>):
          <Form className="App">
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="firstname"
                name="firstname"
                id="firstname"
                placeholder=""
                value={this.state.firstname}
               onChange={this.handlefirstname}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="lastname"
                name="lastname"
                id="lastname"
                placeholder=""
                value={this.state.lastname}
                onChange={this.handlelastname}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Company Name</Label>
              <Input
                type="companyname"
                name="companyname"
                id="companyname"
                placeholder=""
                value={this.state.companyname}
                onChange={this.handlecompanyname}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type="phonenumber"
                name="phonenumber"
                id="phonenumber"
                placeholder=""
                value={this.state.phonenumber}
                onChange={this.handlephonenumber}
              />
            </FormGroup>
          </Col>
          <Col className="text-center">
          
         
          <Button  color="primary" size="lg" style={{marginLeft:"auto"}} onClick={this.handleClick}>Next</Button>{' '}
        </Col>
         

        </Form>
        }
        
        
        
       
      </Container>
    );
  }
}

export default App;