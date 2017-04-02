import React, { Component } from 'react';
import TextInput from '../../components/TextInput/index'
import Button from '../../components/Button/index';
import Message from '../../components/Message/index'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            textValue: '',
        }
        this._toggleButtonStatus = this._toggleButtonStatus.bind(this);
    }

    _setText(e) {
        this.setState({
            textValue: e.target.value
        })
    }

    _toggleButtonStatus() {
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    render() {

        const msg = 'Nokogiri';

        return (
            <div className="main">
                <h1>React Logo Generator!</h1>
                <Message isActive={this.state.isActive}>{this.state.textValue}</Message>
                <h3>Text</h3>
                <TextInput textValue={this.state.textValue} handleOnChange={this._setText} />
                <h3>TextColor</h3>
                <div className="buttonGroup">
                    <Button name="Light" isActive={this.state.isActive} handleClick={this._toggleButtonStatus}/>
                    <Button name="Dark" isActive={!this.state.isActive} handleClick={this._toggleButtonStatus}/>
                </div>
            </div>
        );
    }
}

export default Main;