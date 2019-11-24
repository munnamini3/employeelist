import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import Employees from './EmployeeList'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './common.css'
import postReducer from './reducers/Reducer'
const store = createStore(postReducer);


const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/employees" component={Employees} />
      </div>
    </Router>
  </Provider>
)
ReactDOM.render(routing, document.getElementById('root'))