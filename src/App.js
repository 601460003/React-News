import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import User from './components/User'
import Title from './components/Title'
import Shop from './components/Shop'
import './assect/css/index.css'
import routes from './components/model/router'


function App() {
    return (
        <div className="App">
            <Router>
                <header className='title'>
                    <Link to='/'>首页组件</Link>
                    <Link to='/user'>用户组件</Link>
                    <Link to='/shop'>商户组件</Link>
                </header>
                <Route exact path='/' component={Title}/>
                <Route exact path='/user' component={User}/>
                <Route exact path='/shop' component={Shop}/>
            </Router>
        </div>
    );
}

export default App;
