import React, {Component, Fragment} from 'react'
//和vue一样，引入News组件，形成父子组件的关系
import News from '../components/News'

class Home extends Component {
    constructor(props) {    //props和vue一样用于父子之间的传值
        super(props);
        //react定义数据规范，插值
        this.state = {
            name:'数据绑定',       //插值绑定数据
            title:'我是一个title', //绑定属性
            color:'red' ,          //绑定样式的方法
            style:{
                color:'red',
                fontSize:'14px'
            }
        }
    }

    render() {
        return (
            <Fragment>
                <h5>{this.state.name}</h5>
                <div title={this.state.title}>绑定属性的方法</div>
                <div className={this.state.color}>绑定样式的方法</div>
                <label htmlFor="name"  style={this.state.style}>姓名</label>
                <input id='name'/>
                  <News></News>
            </Fragment>
        )
    }
}

export default Home;

/**
 *1.react绑定属性要注意
 *
 * 绑定样式class  改为className
 *
 * for 要变成htmlFor
 *
 * style 直接写在state里面
 *
 **/