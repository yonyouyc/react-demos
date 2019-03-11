import React, { Component } from 'react';
class LikedButton extends Component {
    constructor(){
        super()
        this.state = { isLiked: false }
    }
    handleClick(){
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render () {
        return (
            <div>
                < button onClick = {
                        this.handleClick.bind(this)
                    } > {
                        this.state.isLiked ? '取消' : '点赞'
                    } </button>
            </div>
            
        )
    }
}
export default LikedButton;