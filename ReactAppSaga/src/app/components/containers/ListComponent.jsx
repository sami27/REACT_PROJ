import React from 'react';
import {TableComp} from '../views/TableList'
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {submitFormData, hideShowLoader, tableDataState} from '../../reducers/Formreducer'
import  history from '../../utils/History'
import * as listactionCreators from '../../actions/Actions'
import {Loader} from '../common'

export class ListComponent extends React.Component{
 constructor(props){
     super(props);
     console.log("this.props list", this.props);
     this.state = {
        listData: []
    };
    
    }

    onDeleteBtnclicked(event, index){
      let listData1 = this.props.listData;
      if (index > -1) {
        listData1.splice(index, 1);
      }
      this.props.submitFormInitiated(listData1);
      this.props.history.push("/");
    }

    onEditBtnclicked(event, index){
        history.push('/form/?:userId=' + index);
    }
 
render(){
return (
	<div className = "container">
   <TableComp  tableData = {this.props.listData} deleteBtnClicked={(event,index) => this.onDeleteBtnclicked(event,index)} editBtnClicked = {(event,index) => this.onEditBtnclicked(event,index)}/>
    </div>
    );
}  
}
const mapStateToProps = (state)=>{
    debugger;
    console.log("State in list", state);
    return{
         listData: state.submitFormData.dataSuccess
          };
        
     console.log("List data", listData);
     
   };
   
   
   const mapDispatchToProps = (dispatch)=>{  
      
     return bindActionCreators(listactionCreators, dispatch)
   };
   
   
export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);
