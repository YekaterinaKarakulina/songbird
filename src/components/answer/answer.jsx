import React from 'react';

export default class Answer extends React.Component {
  render() {
    return (
      <li className="list-group-item" onClick={this.props.onAnswerClick}>
        <span className="li-button"></span>
        {this.props.title}
      </li>
    )
  }
}
