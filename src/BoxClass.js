import React, { Component } from 'react'

export default class BoxClass extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={`box ${this.props.result}`}>
        <h1>{this.props.title}</h1>
        <img className='item-img' src={this.props.item && this.props.item.img}/>
        <h1>{this.props.result}</h1>
      </div>
    )
  }
}
