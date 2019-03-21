import React, {
    Component
} from 'react';
class AutoFocusInput extends Component {
    /* constructor(){
        super()
        this.myRef = React.createRef()
    } */
    componentDidMount() {
        this.input.focus()
    }
    render() {
        return ( 
            <div>
                <input ref={(input) => this.input = input}></input>
               {/*  <div ref={this.myRef}></div> */}
            </div>
        )
    }
}
export default AutoFocusInput;