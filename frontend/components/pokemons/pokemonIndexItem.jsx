var React = require('react');
var HashHistory = require('react-router').hashHistory;

var PokemonIndexItem = React.createClass({
  handleClick: function() {
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },
  render: function() {
    return (
      <li className="poke-list-item" onClick={this.handleClick}>
        <div>Name: {this.props.pokemon.name}</div>
        <div>Type: {this.props.pokemon.poke_type}</div>
      </li>
    );
  }

});

module.exports = PokemonIndexItem;
