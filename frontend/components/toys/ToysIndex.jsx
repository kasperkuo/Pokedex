var React = require('react');
var ToyIndexItem = require('./ToyIndexItem');

var ToysIndex = React.createClass({

  render: function() {
    if (this.props.toys) {
      return (
        <div>
          <ul>
            { this.props.toys.map(function(toy){
              return <ToyIndexItem toy={toy} key={toy.id} />;
            })}
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
});

module.exports = ToysIndex;
