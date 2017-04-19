import React, { Component } from 'react';

class ItemsPage extends Component {
  render() {
    // for testing  
    let items = [{id: 1, name: 'hw 1', description: 'Algebra Homework'}, {id: 2, name: 'hw 2', description: 'Chemistry Homework'}];

    return (
      <div>
        <h2>Items on List</h2>
        <ul>
          {items.map((item) => 
            <li key={item.id}>{item.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default ItemsPage;