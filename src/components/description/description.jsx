import React from 'react';

import './description.scss';

export default class Description extends React.Component {
  render() {
    return (
      <div className="description col-md-6 pl-0">
        <ul className="list-group">
          <li className="list-group-item">
            Послушайте плеер.
            Выберите птицу из списка
          </li>
        </ul>
      </div>
    )
  }
}
