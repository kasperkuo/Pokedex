var React = require('react'),
    ReactDOM = require('react-dom');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex'),
    PokemonDetail = require('./components/pokemons/pokemonDetail'),
    ToyDetail = require('./components/toys/toyDetail');
var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory;

var App = React.createClass({
  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail}>
          <Route path="toys/:toyId" component={ToyDetail}>
          </Route>
        </Route>
      </Route>
    </Router>
      , document.getElementById("root"));
});
