import React, {
    Component
} from 'react';
class Count extends Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    handleClickIncrease() {
        this.setState({
            num: this.state.num + 1
        })
    }
    handleClickDecrease() { 
        this.setState({
            num: this.state.num - 1
        })
        
    }
    render() {
        return ( 
            <div>
                <h3>{ this.state.num }</h3>
                <button onClick = {
                    this.handleClickIncrease.bind(this)
                } > 增加 </button>
                <button onClick = {
                    this.handleClickDecrease.bind(this)
                } > 减少 </button>
            </div>

        )
    }
}
export default Count;