import React from 'react';
import LikedButton from './LikedButton'
import Count from './Count'
import NameList from './NameList'
class HelloWorld extends React.Component {
    
    render(){
        const box = 'y-box';
        const yc = '友云采，让采购交易更简单！';
        return (
            <div className={box}>
                <h1>HelloWorld {yc} {(function(){return '用友云服务！'})()}</h1>
                <LikedButton></LikedButton>
                <Count></Count>
                <NameList></NameList>
            </div>
        )
    }
};

export default HelloWorld;