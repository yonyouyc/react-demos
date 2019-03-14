import React, {
    Component
} from 'react';
class AutoFocusInput extends Component {
    componentDidMount() {
        this.input.focus()
    }
    render() {
        return ( 
            <div>
                <input ref={(input) => this.input = input}></input>
            </div>
        )
    }
}
export default AutoFocusInput;