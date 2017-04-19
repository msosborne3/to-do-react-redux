const React = require('react');

export default function DumberComponent(props) {
  return (
    <div className="new-items">
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Time Due:</label>
        <input type="text" />
        <br />
        <label>Location:</label>
        <input type="text" />
        <br />
      </form>
    </div>
  );
}