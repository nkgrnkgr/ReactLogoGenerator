import React, { Component } from 'react';

class HelloWorld extends Component {

    // 描画処理
    render() {

        // return() の中に1つだけDOMオブジェクトを記載できる（子どもはいくらでも書ける）
        // ２つ書くとエラー
        return (
            
            // ToDo
            // 1.divタグに main というクラスを追加しましょう
            // 2.h1にインラインスタイルで color : tomato を指定しましょう

            // JSXは特別なルールがある。
            // class => className
            // for => htmlFor
            // インラインスタイルは style={{ xxxx: 'yyyyy' }} で表現します。

            <div>
                <h1>Hello World2</h1>
            </div>


        );
    }
}

// デフォルトでHelloWorldというクラスをexportする
export default HelloWorld;