import React,{Component} from 'react';
import '../assect/css/index.css'

class Title extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='header'>
                <span>首页组件</span>
                <span>用户组件</span>
            </div>
        )
    }
}


export default Title;