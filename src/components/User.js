import React,{Component} from 'react';

import '../assect/css/index.css'
import Info from './/User/Info'
import Main from './User/Main'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class User extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <Router>
            <div className='user'>
             <div className='content'>
                 <div className='left'>

                     <Link to='/user/'>用户信息</Link>
                     <br/>
                     <Link to='/user/main'>个人信息</Link>
                 </div>

                 <div className='right'>
                     <Route exact path='/user/' component={Info}/>
                     <Route  path='/user/main' component={Main}/>
                 </div>
             </div>
            </div>
            </Router>
        )
    }
}


export default User;