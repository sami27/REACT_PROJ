import "regenerator-runtime/runtime";
import React from 'react';
import {render } from 'react-dom';
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {NavbarComponent} from './components/common/Navbar'
//import {FormComponent} from './components/containers/FormComponent'
import { store } from './store/ReduxStore';

import history from './utils/History';



class App extends React.Component {
    render() {
        console.log("Store value is", store);
        debugger;
		return (
			<div>
            < NavbarComponent/>
             
            </div>
      	);
    }
}

render(
<Provider store = {store}>
<Router history = {history}>
<App/> 
</Router></Provider>, document.getElementById('root')
);
