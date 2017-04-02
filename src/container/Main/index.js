import React, { Component } from 'react';
import Button from '../../components/Button/index';
import Message from '../../components/Message/index'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: 'Nokogiri',
            fontfamily: '',
            textColor: 'black'
        }
        this._handleOnChange = this._handleOnChange.bind(this);
        this._selectFontFamily = this._selectFontFamily.bind(this);
        this._selectTextColor = this._selectTextColor.bind(this);
    }

    _handleOnChange(e) {
        this.setState({
            textValue: e.target.value
        })
    }

    _selectFontFamily(name) {
        this.setState({
            fontfamily: name,
        })
    }

    _selectTextColor(name) {
        this.setState({
            textColor: name,
        })
    }

    render() {

        return (
            <div className="main">
                <h1>React Logo Generator!</h1>
                <Message isActive={this.state.isActive}>{this.state.textValue}</Message>
                <h3>Text</h3>
                <input type="text" value={this.state.textValue} onChange={this._handleOnChange}/>
                <h3>Font-Family</h3>
                <div className="buttonGroup">
                    <Button name="Robot" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Macondo" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Indie-Flower" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Josefin-Sans" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Jim-Nightshade" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                </div>
                <h3>TextColor</h3>
                <div className="buttonGroup">
                    <Button name="tomato" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="skyblue" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="Black" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="SpringGreen" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="Yellow" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="white" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                </div>
                <h3>BackGroundColor</h3>
            </div>
        );
    }
}

export default Main;