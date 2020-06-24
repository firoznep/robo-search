import React from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  state = {
    robos: [],
    searchText: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ robos: users }));
  }

  render() {
    const handleChange = this.state.robos.filter((robo) =>
      robo.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
    return (
      <div>
        <CardsList robos={handleChange}>
          <h1 className="display-2 text-info">Robo Search</h1>
          <SearchBox
            placeholder="Search Roboz"
            handleChange={(e) => this.setState({ searchText: e.target.value })}
            value={this.state.searchText}
          />
        </CardsList>
      </div>
    );
  }
}

export default App;
