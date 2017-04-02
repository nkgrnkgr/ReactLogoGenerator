import React, { Component } from 'react';
import Button from '../../components/Button/index';
import Message from '../../components/Message/index'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            textValue: 'Nokogiri',
        }
        this._handleOnChange = this._handleOnChange.bind(this);
        this._toggleButtonStatus = this._toggleButtonStatus.bind(this);
    }

    _handleOnChange(e) {
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

        return (
            <div className="main">
                <h1>React Logo Generator!</h1>
                <Message isActive={this.state.isActive}>{this.state.textValue}</Message>
                <h3>Text</h3>
                <input type="text" value={this.state.textValue} onChange={this._handleOnChange}/>
                <h3>TextColor</h3>
                <div className="buttonGroup">
                    <Button name="Light" isActive={this.state.isActive} handleClick={this._toggleButtonStatus}/>
                    <Button name="Dark" isActive={!this.state.isActive} handleClick={this._toggleButtonStatus}/>
                </div>
                <h3>Font-Family</h3>
                <div className="buttonGroup">
                    <Button name="Light" isActive={this.state.isActive} handleClick={this._toggleButtonStatus}/>
                    <Button name="Dark" isActive={!this.state.isActive} handleClick={this._toggleButtonStatus}/>
                </div>
                <h3>BackGroundColor</h3>
                <div className="buttonGroup">
                    <Button name="Light" isActive={this.state.isActive} handleClick={this._toggleButtonStatus}/>
                    <Button name="Dark" isActive={!this.state.isActive} handleClick={this._toggleButtonStatus}/>
                </div>
            </div>
        );
    }
}

export default Main;