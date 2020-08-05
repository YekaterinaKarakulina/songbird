import React from 'react';

export default class Answer extends React.Component {
  render() {
    let classNames = "li-button ";
    if (this.props.addClass) {
      classNames += this.props.addClass
    }
    return (
      <li
        data-id={this.props.id}
        className="list-group-item"
        onClick={this.props.onAnswerClick}>
        <span className={classNames}></span>
        {this.props.title}
      </li>
    )
  }
}
