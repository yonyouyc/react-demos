import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
//import App from './components/App';
//import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Content from './components/Content';


const reducer = (state,action) => {
    if(!state)return {
        themeColor : 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state;
    }
} 
const store = createStore(reducer)
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
    <Provider store = {store}><Index /></Provider>,
    document.getElementById('root')
);
