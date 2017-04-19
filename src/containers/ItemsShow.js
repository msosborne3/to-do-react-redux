import React from 'react';

const ItemsShow = (props) => {
  const item = {id: 1, name: 'hw 1', description: 'Algebra', timeDue: 'Tomorrow', location: 'School', done: false};

  return (
    <div>
      <h2>{item.name}</h2>
      <h3>{item.done ? "Done" : "Not Done"}</h3>
      <p>Description: {item.description}</p>
      <p>Time Due: {item.timeDue}</p>
      <p>Location: {item.location}</p>
    </div>
  );
};

export default ItemsShow;