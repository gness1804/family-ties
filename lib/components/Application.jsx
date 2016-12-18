import React, {Component} from 'react';

class Application extends Component {

  render() {
    return (
      <div>
      <h2>Family Tree</h2>
        {this.props.children}
      </div>
    );
  }

}


export default Application;
