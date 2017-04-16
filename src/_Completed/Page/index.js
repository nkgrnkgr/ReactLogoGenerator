import React, { Component } from 'react';
// Todo1
// Header,Sidebar,Main,footerのindex.jsをインポートしてください。

import Header from './Header/index';
import Sidebar from './Sidebar/index';
import Main from './Main/index';
import Footer from './Footer/index';

class Page extends Component {
    render() {
        return (
            // Todo2
            // Header,Sidebar,Main,footerの順に以下のdivの中にコンポーネントを書いてください。
            // SidebarとMainを"contents"というクラスのdivタグで囲ってください。
            <div>
                <Header />
                <div className="contents">
                   <Sidebar /> 
                   <Main /> 
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;