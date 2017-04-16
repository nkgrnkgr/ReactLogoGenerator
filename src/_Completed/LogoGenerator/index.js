import React, { Component } from 'react';

import Button from './components/Button/index';
import Message from './components/Message/index'


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

        this.state = {
            textValue: '@Nokogiri',
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

    
    /**
     * テキストの入力内容をstateにセット
     * 
     * @param {any} e 
     * 
     * @memberOf Main
     */
    _handleOnChange(e) {
        this.setState({
            textValue: e.target.value
        })
    }


    /**
     * フォントサイズの入力内容をstateにセット
     * 
     * @param {any} e 
     * 
     * @memberOf Main
     */
    _handleOnChangeNumber(e) {
        this.setState({
            fontSize: e.target.value
        })
    }


    /**
     * 選択したフォント種類をstateにセット
     * 
     * @param {any} name 
     * 
     * @memberOf Main
     */
    _selectFontFamily(name) {
        this.setState({
            fontfamily: name,
        })
    }


    /**
     * 選択した文字色をstateにセット
     * 
     * @param {any} name 
     * 
     * @memberOf Main
     */
    _selectTextColor(name) {
        this.setState({
            textColor: name,
        })
    }


    /**
     * 選択した背景色をstateにセット
     * 
     * @param {any} name 
     * 
     * @memberOf Main
     */
    _selectBackGroundColor(name) {
        this.setState({
            backgroundColor: name,
        })
    }


    render() {

        // Todo1
        // logo の中の <Message></Message>コンポーネントに以下のプロパティに管理している
        // 同名のStateをセットしてください。(ヒント hogehoge={this.state.hogehoge})
        //  backgroundColor
        //  fontSize
        //  fontfamily
        //  textColor

        // Todo2
        // <Message></Message>コンポーネントの子どもとして
        // Stateで管理している textValue を入れてください。
        // 子ども(fugafuga)に受け渡す方法は<hogehoge>{this.state.fugafuga}</hogehoge>
        // hogehogeクラスは this.props.children でfugafugaを受け取ります。

        // ロゴ
        const logo = (
                <Message
                 backgroundColor={this.state.backgroundColor}
                 fontSize={this.state.fontSize}
                 fontfamily={this.state.fontfamily}
                 textColor={this.state.textColor}
                >
                {this.state.textValue}
                </Message>
        )

        // Todo3
        // <Button>コンポーネントを使って、ロゴを装飾するボタンを作成してください。
        // {/*Todo3　Please fill me !*/} という箇所をうめてください。
        // <Button>コンポーネントには、name, selectedName, handleClick をプロパティとして渡してください。
        // 
        // FontFamilyボタンの name は names_FontFamily から取得した名前を設定してください。
        // FontFamilyボタンの selectedName は stateのfontfamily を設定してください。
        // FontFamilyボタンの handleClick は this._selectFontFamily から取得してください。
        // 
        // TextColorボタンの name は names_textColor から取得した名前を設定してください。
        // TextColorボタンの selectedName は stateのtextColor を設定してください。
        // TextColorボタンの handleClick は this._selectTextColor から取得してください。
        // 
        // BackGroundColorボタンの name は names_FontFamily から取得した名前を設定してください。
        // BackGroundColorボタンの selectedName は stateのfontfamily を設定してください。
        // BackGroundColorボタンの handleClick は this._selectBackGroundColor から取得してください。

        const names_FontFamily = ['Robot','Macondo','Indie-Flower','Josefin-Sans','Jim-Nightshade','Pacifico'];
        const names_textColor = ['Black','tomato','skyblue','SpringGreen','Yellow','white'];
        const names_backgroundColor = ["warm-flame", "night-fade", "tempting-azure", "malibu-beach", "star-wine", "mountain-rock"];

        return (
            <div className="main">
                <h1>React Logo Generator!</h1>
                {logo}
                <h3>Text</h3>
                <input type="text" className="fontSize" value={this.state.textValue} onChange={this._handleOnChange}/>
                <input type="number" className="fontSize" value={this.state.fontSize} onChange={this._handleOnChangeNumber}/> px
                <h3>Font-Family</h3>
                <div className="buttonGroup">
                    {names_FontFamily.map((item, index)=> {
                        {/*Todo3　Please fill me !*/}
                        return <Button name={item} selectedName={this.state.fontfamily} handleClick={this._selectFontFamily}/>
                    })}
                </div>
                <h3>TextColor</h3>
                <div className="buttonGroup">
                    {names_textColor.map((item, index)=> {
                        {/*Todo3　Please fill me !*/}
                        return <Button name={item} selectedName={this.state.textColor} handleClick={this._selectTextColor}/>
                    })}               
                </div>
                <h3>BackGroundColor</h3>
                <div className="buttonGroup">
                    {names_backgroundColor.map((item, index)=> {
                        {/*Todo3　Please fill me !*/}
                        return <Button name={item} selectedName={this.state.backgroundColor} handleClick={this._selectBackGroundColor}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Main;