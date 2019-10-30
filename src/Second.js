import React, {Component} from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import './App.css';
import Modal from './Modal';


class Second extends Component {
  state={
    username:'',
    password:'',
    secondflag:false
  };
  values = this.props
  
  
  
  handleusername = (event) => {
   
    this.setState({username: event.target.value});
  
    
  }

  handlepassword = (event) => {
    
    this.setState({password: event.target.value});
    
  }
  
  handleClick=(event)=>{
    // console.log('this is:',this);
  // event.preventDefault();
  //alert ("You are submitting " + this.state.firstname+this.state.lastname);
  
  this.setState({
    secondflag:true,
   
  })
   }
   

/*  handleButton=()=>{
 return <Popup trigger={<button> Trigger</button>} position="right center">
  modal
  closeOnDocumentClick>

  <span> Modal content </span>
</Popup>
   }*/
 
 
/*  onConfirm = () => {
    console.log(this.state)
  }*/

 render() {
    return (

          <Container className="App">
          {/* <h1>{this.props.message}</h1> */}
          
            <Form className="App">
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder=""
                  value={this.state.username}
                 onChange={this.handleusername}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  value={this.state.password}
                  onChange={this.handlepassword}
                />
              </FormGroup>
            </Col>
            <Col className="text-center">
            <Modal values={Object.assign({}, this.values, this.state)}  
           onClick={() => {console.log('hello')}} trigger={<Button color="primary">Submit</Button>}/>
            </Col>
           </Form>
           
           
           
         
          </Container>
    );
  }
}



export default Second;