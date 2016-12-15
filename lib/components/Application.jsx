import React, {Component} from 'react';

class Application extends Component {

  render() {
    return (
      <div>
        I am the Application component.
        {this.props.children}
      </div>
    );
  }

}


export default Application;
