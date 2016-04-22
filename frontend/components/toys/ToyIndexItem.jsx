var React = require('react');
var PropTypes = React.PropTypes;
var HashHistory = require('react-router').hashHistory;

var ToyIndexItem = React.createClass({
  handleClick: function() {

    HashHistory.push('pokemon/' +
      this.props.toy.pokemon_id + '/toys/' + this.props.toy.id);
  },

  render: function() {
    return (
      <li onClick={this.handleClick} className="toy-list-item">
        <div>Name: {this.props.toy.name}</div>
        <div>Price: {this.props.toy.price}</div>
        <div>Happiness: {this.props.toy.happiness}</div>
      </li>
    );
  }

});

module.exports = ToyIndexItem;
