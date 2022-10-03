import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout(props) {

    const {history} = props
    
    return(
        <div className="layout">
            <Header history = {history} />
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;