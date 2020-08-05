import React from 'react';


import './button.scss'
export default class Button extends React.Component {
  render() {
    return (
      <div className="d-flex my-3">
        <button
          type="button"
          className="btn btn-primary flex-fill"
          disabled={this.props.disabled}
          onClick={this.props.onButtonClick}>
          {this.props.title}
        </button>
      </div>
    )
  }
}
