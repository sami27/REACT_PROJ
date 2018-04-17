import React from 'react';
import {Form, Panel, Button, ButtonGroup} from 'react-bootstrap';
import {FormTextField, ButtonCmp} from '../common'
import {submitFormInitiated, showLoader, hideLoader} from '../../actions/Actions';
import * as listactionCreators from '../../actions/Actions';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {submitFormData, hideShowLoader} from '../../reducers/Formreducer'



export class FormComponent extends React.Component{
 constructor(props){
    super(props);
    console.log("Props is", this.props);
     this.state = {
      firstName : "",
      lastName: "",
      email : "",
      age : ""
     }
     this.validateTextData = this.validateTextData.bind(this);
    

  }
 
  validateTextData(event){
   const length = this.state.firstName.length;
      if (length > 5) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
     

  }
  pushFormView(){
    let formDataArr = this.props.listData || []
    if(this.props.location.search){
      let searchParam = this.props.location.search;
      let index = searchParam.split('=')[1];
    let data = this.state;
    let dataObj = {
      "firstName" : this.state.firstName,
      "lastName" : this.state.lastName,
      "email": this.state.email,
      "age" : this.state.age
    }
    formDataArr[index] = dataObj;
   }
    else{
      let data = this.state;
      let dataObj = {
        "firstName" : this.state.firstName,
        "lastName" : this.state.lastName,
        "email": this.state.email,
        "age" : this.state.age
      }
      formDataArr.push(dataObj);
  }
    this.props.submitFormInitiated(formDataArr);
    this.props.history.push("/");
   // this.props.showLoader();
  }
 

  resetFormField(){
    this.setState({
      "firstName" : "",
      "lastName" : "",
      "email" : "",
      "age": ""
    });
  }


componentDidMount(){
  if(this.props.location.search){
    let searchParam = this.props.location.search;
    let index = searchParam.split('=')[1];
    let formDataObj = this.props.listData[index];
     this.setState({
       "firstName" : formDataObj.firstName,
       "lastName" : formDataObj.lastName,
       "email" : formDataObj.email,
       "age": formDataObj.age
     });
  }
}

render(){
    return (
    <div className = "container" style={{display:"block"}}>
    <div><h3>Please fill the details</h3></div>
   <Form horizontal>
        <FormTextField  controlId = {"firstName"} label = {"First Name:"} type={"text"} value = {this.state.firstName} placeHolder = {"Enter first name"} onChangeEvent={(e) => this.setState({ firstName: e.target.value })} />
        <FormTextField  controlId = {"lastName"} label = {"Last Name:"} type={"text"} value = {this.state.lastName} placeHolder = {"Enter last name"} onChangeEvent={(e) => this.setState({ lastName: e.target.value })} />
        <FormTextField  controlId = {"email"} label = {"Email:"} type={"email"} value = {this.state.email} placeHolder = {"Enter the email"} onChangeEvent={(e) => this.setState({ email: e.target.value })} />
        <FormTextField  controlId = {"age"} label = {"Age:"} type={"number"} value = {this.state.age} placeHolder = {"Enter the age"} onChangeEvent={(e) => this.setState({age: e.target.value })} />
    </Form>
    <div className = "row">
    <div className="col-xs-12 col-md-6 leftPadding">
    <ButtonCmp buttonLabel = {"Submit details"} style = {"primary"} clickAction = {(e) => this.pushFormView(e)}/>
    </div>
    <div className="col-xs-12 col-md-6">
    <ButtonCmp buttonLabel = {"Reset fields"} style = {"info"} clickAction = {(e) => this.resetFormField(e)}/>
    </div>
    </div>
    </div>
  );
}
}



const mapStateToProps = (state)=>{
 return{
  listData: state.submitFormData.data
  };
  
};


const mapDispatchToProps = (dispatch)=>{  
  return bindActionCreators(listactionCreators, dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(FormComponent);



