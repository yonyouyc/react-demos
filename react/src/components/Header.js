import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render(){
        return (
            <div>
                <h1 style={{color:this.props.themeColor}}>React标题</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
export default connect(mapStateToProps)(Header);