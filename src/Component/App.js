import React from 'react';
import '../CSS/App.css';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import Sort from './SortDropDown';
import Species from './Species';


class App extends React.Component {

    state = {
        characters: [],
        displayedCharacters: [],
        prevSearchTerm: '',
        species: []
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async (filters) => {
        const response = await fetch('https://rickandmortyapi.com/api/character?' + filters);
        const data = await response.json();
        this.setState({ characters: data.results, displayedCharacters: data.results });
        this.getSpecies();
    };

    onSearch = async (term) => {
        if (term) {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${term}`);
            const data = await res.json();
            if (res) {
                this.setState({ displayedCharacters: data.results, prevSearchTerm: term });
            } else { alert('There is no data to display'); }
        }
        else { this.setState({ displayedCharacters: this.state.characters }) }
    }

    onSort = (sortedCharacters) => {
        this.setState({ displayedCharacters: sortedCharacters });
    };

    getSpecies = () => {
        let species = this.state.characters.map(characters => {
            return characters.species
        });
        const filteredSpecies = species.filter((el, index) => species.indexOf(el) === index);
        this.setState({ species: filteredSpecies });
    }

    filteredSpecies = (filteredSpecies) => {
        this.setState({ displayedCharacters: filteredSpecies });
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Selected Filters</h2>
                </div>
                <div className='col-3'>
                    <p>Filter</p>
                    <Species
                        species={this.state.species}
                        characters={this.state.displayedCharacters}
                        filteredSpecies={this.fetchCharacters}

                    />
                </div>
                <div className='col-9'>
                    <SearchBar
                        onSearch={this.onSearch}
                    />
                    <Sort
                        characters={this.state.displayedCharacters}
                        onSort={this.onSort}
                    />
                </div>
                <CharacterList
                    list={this.state.displayedCharacters}
                />
            </div>
        )
    }
}
export default App;