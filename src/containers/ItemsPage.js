import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemsPage extends Component {
  render() {
    return (
      <div>
        <h2>To-do Items</h2>
        <ul>
          {this.props.items.map((item) => 
            <li key={item.id}>{item.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(ItemsPage);

