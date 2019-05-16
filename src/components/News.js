import React from 'react';
//通过模块化导入图片进行渲染
import logo from '../assect/img/time.jpg'
import '../assect/css/index.css'

class News extends React.Component {
    constructor() {
        super();
        this.state={
            list:['小红','小黄','小黑'],
            list2:[<h2>我是一个一号</h2>,<h2>我是二号</h2>],
            list3:[
                {title:'xinwen11'},
                {title:'xinwen22'},
                {title:'xinwen33'},
            ]
        }

    }

    render() {
        //遍历数据的方法
        let listReulst = this.state.list.map(function (value,key) {

            return <li>{value}</li>

        });



        return (
            <div>
              <p>组件第二种写法</p>
               <div className='news'>
                   <img src={logo} />
                   <img src={require('../assect/img/time.jpg')} />
               </div>
               <ul>
                   {listReulst}
               </ul>
                {this.state.list2}
                <h2>遍历循环数据的三种方法</h2>
              <ul>
                  {
                      this.state.list3.map(function (value,key) {
                          return <li key={key}>{value.title}</li>
                      })
                  }
              </ul>
            </div>
        )
    }
}
export default News;

