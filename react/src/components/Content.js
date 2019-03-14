import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
class Content extends Component {
    render(){
        return (
            <div>
                <p>React内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}
export default Content;