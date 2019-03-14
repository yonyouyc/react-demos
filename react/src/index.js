import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
//import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import ThemeSwitch from './components/ThemeSwitch';
import Content from './components/Content';
//import * as serviceWorker from './serviceWorker';
class Index extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render( 
    < Index /> ,
    document.getElementById('root')
);

//serviceWorker.unregister();
