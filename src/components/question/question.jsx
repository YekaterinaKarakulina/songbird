import React from 'react';

import './question.scss';

export default class Question extends React.Component {
  render() {
    return (
      <div className="question d-flex flex-column flex-sm-row">
        <img className="align-self-center" src="https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg" alt="воробей" />
        <div className="d-flex flex-column mx-3 flex-fill">
          <div className="stars mt-3 mt-sm-0">*****</div>
          <div className="hr"></div>
          <audio controls className="mt-3">
            <source src="https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
            </audio>
        </div>

      </div>
    )
  }
}
