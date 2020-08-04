import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className="d-flex mb-3">
        <button
          type="button"
          className="btn btn-primary flex-fill"
          onClick={this.props.onNextButtonClick}>
          Next Level
        </button>
      </div>
    )
  }
}
