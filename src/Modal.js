import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import './Modal.css';
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem} from 'reactstrap';
export class Modal extends Component {

    values = this.props.values;

    state={
      secondflag:false
    };

    handleClick=(event)=>{
     this.setState({secondflag:true})
     }


    render() {
        const { firstname, lastname, phonenumber, companyname } = this.values;
        return (
            <Popup
            trigger={this.props.trigger}
            modal
            closeOnDocumentClick
          >
            
           {close => (
               <div className="modal1">
               <a className="close" onClick={close}>
                 &times;
               </a>
               <div className="header"> Details </div>
               <div className="content">
                 {" "}
                 <ListGroup>
                     <ListGroupItem style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                         <h4>First Name:</h4><span style={{marginLeft: 30, fontSize: 18}}>{firstname}</span> 
                     </ListGroupItem>
                     <ListGroupItem style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                         <h4>Last Name:</h4><span style={{marginLeft: 30, fontSize: 18}}>{lastname}</span> 
                     </ListGroupItem>
                     <ListGroupItem style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                         <h4>Phone Number:</h4><span style={{marginLeft: 30, fontSize: 18}}>{phonenumber}</span> 
                     </ListGroupItem>
                     <ListGroupItem style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                         <h4>Company Name:</h4><span style={{marginLeft: 30, fontSize: 18}}>{companyname}</span> 
                     </ListGroupItem>
                     <ListGroupItem style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                         <h4>User Name:</h4><span style={{marginLeft: 30, fontSize: 18}}>{this.props.values.username}</span> 
                     </ListGroupItem>
                 </ListGroup>
               </div>
               <div className="actions">
               <Button
                    color="primary"
                    onClick={() => {
                        
                      close();
                    }}
            >
                   Done
                 </Button>
               
                 
              </div>     
               
             </div>
           )}
                  
          </Popup>
               
        )
    }
}
export default Modal;


