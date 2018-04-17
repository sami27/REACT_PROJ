import React from 'react';
import {Redirect, Link, Route, Switch} from 'react-router-dom'
import { Navbar, Nav,NavbarBrand, Button, NavItem} from 'react-bootstrap';
import {ButtonCmp} from './Button';
import FormComponent from '../containers/FormComponent';
import ListComponent from '../containers/ListComponent';
 
export class NavbarComponent extends React.Component {

    render() {
        console.log("this.props", this.props);
        return (
            <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
               <a className="navbar-brand" >React App</a>
             </div>
             <ul className="nav navbar-nav">
             <li> <Link to="/">Subscriber Details</Link> </li>
           </ul>
           <ul className="nav navbar-nav navbar-right">
           <li> <Link to="/form">Add Subscriber</Link> </li>
           </ul>
         </div>
        </nav>
       <Switch>
                <Route exact path="/"  component={ListComponent} />
                <Route path="/form" component={FormComponent} />
                <Route path="/form/?:userId" component={FormComponent} />
                <Redirect to="/" />
      </Switch>
        </div>
        );
    }
}

// export default NavbarComponent;