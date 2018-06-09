import React from 'react'
import { render } from 'react-dom'
import Wrong from './modules/selfTable'

import { Router, Route, hashHistory } from 'react-router'
import App from './modules/app'
import Detail from './modules/detail'
import WrongLog from './modules/selfTableLogin'
import ManageSet from "./modules/manageTable";

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/wrongset" component={Wrong}/>
        <Route path="/detail/:key" component={Detail}/>
        <Route path="/yourset/:key" component={WrongLog}/>
        <Route path="/manager" component={ManageSet}/>
    </Router>
), document.getElementById('app'))
