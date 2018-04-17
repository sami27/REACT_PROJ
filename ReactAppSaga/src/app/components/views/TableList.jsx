import React from 'react'
import {Table, Col} from 'react-bootstrap'
import {ButtonCmp} from '../common'
import  history from '../../utils/History'
 
export class TableComp extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }


  render(){
        return(
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
          {this.props.tableData && this.props.tableData.length > 0 ? this.props.tableData.map((data, index) => {
            debugger;
            console.log("list iterable data", data);
              return(
                <tr key ={index}>
                <td>{index + 1}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td><Col xs={3}><ButtonCmp style = {"primary"} clickAction = {(e) => this.props.editBtnClicked(e,index)} buttonLabel ={"Edit"}/></Col>
                <Col xs={3}><ButtonCmp style = {"danger"} clickAction = {(e) => this.props.deleteBtnClicked(e,index)} buttonLabel ={"Delete"} /></Col>
              </td>
              </tr>
          )
          }):null}
            </tbody>
          </Table>

        );
    }
}