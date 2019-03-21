import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
//import App from './components/App';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Content from './components/Content';

function createStore(reducer) {
    let state = null
    const listeners = [];
    const subsrcibe = l => listeners.push(l);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    }
    dispatch({})
    return {
        getState,
        dispatch,
        subsrcibe
    }
}
const ThemeReducer = (state,action) => {
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
const store = createStore(ThemeReducer)
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
    < HelloWorld /> ,
    document.getElementById('root')
);
