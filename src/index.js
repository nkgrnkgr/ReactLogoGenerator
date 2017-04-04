// エントリーポイントになるjs
// React + ReactDomを利用する
import React from 'react';
import ReactDom from 'react-dom';

// 各種モジュールのimport
import HelloWorld from './HelloWorld/index';
import PropsState from './PropsState/index'
import Page from './Page/index';
import LogoGenerator from "./LogoGenerator/container/Main/index";

// HTMLのdomに唯一アクセスする箇所
const el = document.getElementById('root')

// htmlの#rootに作成されたDomを描画している
ReactDom.render(
    <Page />,
    // <PropsState defaultValue="twitter" />,
    el
)