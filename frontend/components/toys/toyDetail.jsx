var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var ClientActions = require('../../actions/clientActions');

var ToyDetail = React.createClass({
  getInitialState: function() {
  //   return this.getStateFromStore(this.props.params);
    return {};
  },

  getStateFromStore: function(params) {
    // return { toy: PokemonStore.findToy(params) };
  },

  _onChange: function(params) {
    // params = params
    // this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    // this.listener = PokemonStore.addListener(this._onChange);
    // this._onChange();
  },

  componentWillUnmount: function() {
    // this.listener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    // this._onChange();
  },

  render: function() {
    return (
      <div ></div >
    );
  }

});

module.exports = ToyDetail;
