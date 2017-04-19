const React = require('react');

export default function DumberComponent(props) {
  return (
    <div className="new-items">
      <form>
        <label>Item Name:</label>
        <input type="text" />
        <br />
        <label>Description:</label>
        <input type="text" />
        <br />
        <label>Time Due:</label>
        <input type="text" />
        <br />
        <label>Location:</label>
        <input type="text" />
        <br />
        <label>Done:</label>
        <input type="checkbox" />
        <br />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
}