import React from 'react';
import LikedButton from './LikedButton'
import Count from './Count'
import Count2 from './Count2'
import NameList from './NameList'
import Clock from './Clock';
import AutoFocusInput from './AutoFocusInput';
class HelloWorld extends React.Component {
    
    render(){
        const box = 'y-box';
        const yc = '友云采，让采购交易更简单！';
        return (
            <div className={box}>
                <h1>HelloWorld {yc} {(function(){return '用友云服务！'})()}</h1>
                <LikedButton></LikedButton>
                <Count></Count>
                <Count2></Count2>
                <Clock></Clock>
                < AutoFocusInput > </AutoFocusInput>
                <NameList></NameList>
            </div>
        )
    }
};

export default HelloWorld;