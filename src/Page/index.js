import React, { Component } from 'react';
import Header from './Header/index';
import Sidebar from './Sidebar/index';
import Main from './Main/index';
import Footer from './Footer/index';

class Page extends Component {
    render() {
        return (
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