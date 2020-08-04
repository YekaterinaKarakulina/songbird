import React from 'react';


import './button.scss'
export default class Button extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="d-flex mb-3">
        <button
          type="button"
          className="btn btn-primary flex-fill"
          disabled={this.props.disabled}
          onClick={this.props.onNextButtonClick}>
          Next Level
        </button>
      </div>
    )
  }
}
