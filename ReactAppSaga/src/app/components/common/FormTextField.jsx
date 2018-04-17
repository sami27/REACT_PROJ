import React from 'react'

import {FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap'

export class FormTextField extends React.Component{
    render(){
        return(
          <div>
        <FormGroup
          controlId={this.props.controlId}
          >
         <Col componentClass={ControlLabel} sm={2}>
         {this.props.label}
        </Col>
       <Col sm={10}>
      <FormControl type={this.props.type}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange = {(e) => this.props.onChangeEvent(e)} />
        <FormControl.Feedback />
        </Col>   
        </FormGroup>
        </div>
        ) ;
    }
}