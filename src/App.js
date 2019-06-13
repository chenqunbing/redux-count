import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { add, reduce} from './actions/index'

class App extends React.Component{
  constructor (prop) {
    super(prop)
    this.handleReduce = this.handleReduce.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd (){
    this.props.add()
  }
  handleReduce () {
    this.props.reduce()
  }
  render () {
    const count = this.props.count
    return (
      <div className="container">
        <div className='add' onClick={this.handleReduce}>-</div>
        <div className='count'>{count}</div>
        <div className='add' onClick={this.handleAdd}>+</div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(
  mapStateToProps,
  {add, reduce}
)(App)
