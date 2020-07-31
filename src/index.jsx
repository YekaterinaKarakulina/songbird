import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class App extends React.Component {
  render() {
    return <div className="test">Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<App name="Kate" />, document.getElementById('root'));
