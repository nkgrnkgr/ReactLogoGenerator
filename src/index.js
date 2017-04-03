// エントリーポイントになるjs
import React from 'react';
import ReactDom from 'react-dom';

// Hello worldのモジュールをインポート
import HelloWorld from './HelloWorld/index';

// PropsStateのモジュールをインポート
import PropsState from './PropsState/index'

// Pageのモジュールをインポート
import Page from './Page/index';

// Mainクラスのファイルをインポート
import LogoGenerator from "./LogoGenerator/container/Main/index";


// HTMLのdomに唯一アクセスする箇所
const el = document.getElementById('root')

// htmlの#rootにMainクラスで作成されたDomを描画している
ReactDom.render(
    <PropsState defaultValue="twitter" />,
    el
)