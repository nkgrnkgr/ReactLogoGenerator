import React, { Component } from 'react';

// 後で利用するButtonクラスとMessageクラスをimport
import Button from '../../components/Button/index';
import Message from '../../components/Message/index'


/**
 * このアプリケーション全体の構成を司るメインのクラス
 * 
 * @class Main
 * @extends {Component}
 */
class Main extends Component {

    /**
     * コンストラクター
     * このクラスのインスタンスが生成される初回に実行されるメソッド
     * Creates an instance of Main.
     * @param {any} props 
     * 
     * @memberOf Main
     */
    constructor(props) {
        super(props);

        // stateを管理
        this.state = {
            textValue: '@Nokogiri', //入力したテキスト
            fontSize: 64, 
            fontfamily: 'Pacifico',
            textColor: 'Black',
            backgroundColor: 'tempting-azure',
        }
        this._handleOnChange = this._handleOnChange.bind(this);
        this._handleOnChangeNumber = this._handleOnChangeNumber.bind(this);
        this._selectFontFamily = this._selectFontFamily.bind(this);
        this._selectTextColor = this._selectTextColor.bind(this);
        this._selectBackGroundColor = this._selectBackGroundColor.bind(this);
    }

    _handleOnChange(e) {
        this.setState({
            textValue: e.target.value
        })
    }

    _handleOnChangeNumber(e) {
        this.setState({
            fontSize: e.target.value
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

    _selectBackGroundColor(name) {
        this.setState({
            backgroundColor: name,
        })
    }

    render() {

        return (
            <div className="main">
                <h1>React Logo Generator!</h1>
                <Message
                 backgroundColor={this.state.backgroundColor}
                 fontSize={this.state.fontSize}
                 fontfamily={this.state.fontfamily}
                 textColor={this.state.textColor}
                >
                {this.state.textValue}
                </Message>
                <h3>Text</h3>
                <input type="text" className="fontSize" value={this.state.textValue} onChange={this._handleOnChange}/>
                <input type="number" className="fontSize" value={this.state.fontSize} onChange={this._handleOnChangeNumber}/> px
                <h3>Font-Family</h3>
                <div className="buttonGroup">
                    <Button name="Robot" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Macondo" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Indie-Flower" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Josefin-Sans" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Jim-Nightshade" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    <Button name="Pacifico" selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                </div>
                <h3>TextColor</h3>
                <div className="buttonGroup">
                    <Button name="Black" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="tomato" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="skyblue" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="SpringGreen" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="Yellow" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    <Button name="white" selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                </div>
                <h3>BackGroundColor</h3>
                <div className="buttonGroup">
                    <Button name="warm-flame" selectedName={this.state.backgroundColor} handleClick={this._selectBackGroundColor}/>
                    <Button name="night-fade" selectedName={this.state.backgroundColor} handleClick={this._selectBackGroundColor}/>
                    <Button name="tempting-azure" selectedName={this.state.backgroundColor} handleClick={this._selectBackGroundColor}/>
                    <Button name="malibu-beach" selectedName={this.state.backgroundColor} handleClick={this._selectBackGroundColor}/>
                    <Button name="star-wine" selectedName={this.state.backgroundColor} handleClick={this._selectBackGroundColor}/>
                    <Button name="mountain-rock" selectedName={this.state.backgroundColor} handleClick={this._selectBackGroundColor}/>
                </div>

            </div>
        );
    }
}

export default Main;