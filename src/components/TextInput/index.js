import React, { Component } from 'react';

class TextInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <input type="text" value={this.props.textValue} onChange={this.props.handleOnChange}/> 
            </div>
        );
    }
}

export default TextInput;