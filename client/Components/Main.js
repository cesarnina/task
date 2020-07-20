import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Todos from './Todos'
import SingleTodo from './SingleTodo'

export default class Main extends Component {
  render () {
    return (
      <div id='main'>
        <h1>To do's!!!</h1>
        <Router>
          <Switch>
            <Route exact path='/' component={Todos} />
            <Route path='/todos/:todoId' component={SingleTodo} />
          </Switch>
        </Router>
      </div>
    )
  }
}
