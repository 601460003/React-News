import React, {Component} from 'react'

class Header extends Component{
    // 说明props不仅可以给子组件传值，甚至可以把整个父组件以及方法传给子组件
    constructor(props){
        super(props);
        this.state = {
            msg:'我是一个子组件'
        }
    }

    run=()=>{
        alert('我是子组件的方法，爸爸快来操控我')
    };

    render(){
        return(
            <div>
                {/*子组件接收父组件的数据*/}
                <h2>{this.props.title}</h2>
                <button onClick={this.props.run}>调用父组件的方法</button>
                <br/>
                <button onClick={this.props.MM.run}>获取整个父组件内容</button>
                <br/>

                <button onClick={this.props.MM.getChildData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button>
            </div>
        )
    }
}


export  default Header;