import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import About from '../components/About/About';
import Home from '../components/Home/Home';
import Tours from '../components/Tours/Tours.jsx';
import style from './approuter.module.scss'

const AppRouter = (props) => {
    return (
            <div className={style.container}>
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/about' component={About}/>
                    <Route path='/tours' component={Tours}/>
                </Switch>
            </div>
        
    );
}

export default AppRouter;