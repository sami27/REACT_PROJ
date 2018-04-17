import React from 'react';
import { FormGroup, ButtonToolbar, Button } from 'react-bootstrap';

export class ButtonCmp extends React.Component {
    render() {
        console.log("style ba", this.props);
        return (
            <div>
                <ButtonToolbar><Button bsStyle= {this.props.style} onClick={(e) => this.props.clickAction(e)}>{this.props.buttonLabel}</Button></ButtonToolbar>
              </div>
        );
    }
}

